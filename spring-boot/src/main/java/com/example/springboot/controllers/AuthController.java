package com.example.springboot.controllers;

import java.util.*;
import java.util.stream.Collectors;

import javax.mail.MessagingException;
import javax.validation.Valid;

import com.example.springboot.email.context.AccountVerificationEmailContext;
import com.example.springboot.email.service.EmailService;
import com.example.springboot.security.token.SecureToken;
import com.example.springboot.security.jwt.AuthTokenFilter;
import com.example.springboot.security.token.DefaultSecureTokenService;
import com.example.springboot.security.token.SecureTokenService;
import com.example.springboot.security.token.repository.SecureTokenRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.springboot.models.ERole;
import com.example.springboot.models.Role;
import com.example.springboot.models.User;
import com.example.springboot.models.Project;
import com.example.springboot.models.Client;
import com.example.springboot.models.Qualification;
import com.example.springboot.payload.request.LoginRequest;
import com.example.springboot.payload.request.SignupRequest;
import com.example.springboot.payload.response.JwtResponse;
import com.example.springboot.payload.response.MessageResponse;
import com.example.springboot.repository.RoleRepository;
import com.example.springboot.repository.UserRepository;
import com.example.springboot.repository.ProjectRepository;
import com.example.springboot.repository.ClientRepository;
import com.example.springboot.repository.QualificationRepository;
import com.example.springboot.security.jwt.JwtUtils;
import com.example.springboot.security.services.UserDetailsImpl;
import org.thymeleaf.util.StringUtils;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    QualificationRepository qualificationRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    private EmailService emailService;

    @Autowired
    private SecureTokenService secureTokenService;

    @Autowired
    SecureTokenRepository secureTokenRepository;

    @Autowired
    private MessageSource messageSource;

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        logger.info(loginRequest.getPassword());
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "sp":
                        System.out.println("sp");
                        Role modRole = roleRepository.findByName(ERole.ROLE_SP)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        Role role = roles.iterator().next();
        user.setRole(role.getName());
        userRepository.save(user);

        // Send registration email
        SecureToken secureToken= secureTokenService.createSecureToken();
        secureToken.setUser(user);
        secureTokenRepository.save(secureToken);
        AccountVerificationEmailContext emailContext = new AccountVerificationEmailContext();
        emailContext.init(user);
        emailContext.setToken(secureToken.getToken());
        emailContext.buildVerificationUrl("http://localhost:8080/", secureToken.getToken());
        try {
            emailService.sendMail(emailContext);
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(new MessageResponse("User registered successfully, confirm your email address!"));
    }

    @GetMapping("/sp")
    public ResponseEntity<List<User>> getAllUsers(@RequestParam(required = false) String username) {
        try {
            List<User> users = new ArrayList<>();
            userRepository.findByRole(ERole.ROLE_SP).forEach(users::add);

            Set<User> to_return = new HashSet<>();

            if (username != null) {
                String[] user_list = username.split(" ");
                for (User u: users) {
                    for (String a: user_list) {
                        if (u.getName().contains(a)) {
                            to_return.add(u);
                        }
                    }
                }
            } else {
                for (User u: users) {
                    to_return.add(u);
                }
            }

            List<User> a = new ArrayList<>(to_return);

            if (a.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(a, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/sp/location")
    public ResponseEntity<List<User>> getLocations(@RequestParam(required = false) String location) {
        try {
            List<User> users = new ArrayList<>();
            userRepository.findByRole(ERole.ROLE_SP).forEach(users::add);

            Set<User> to_return = new HashSet<>();

            if (location != null) {
                for (User u: users) {
                    if (u.getLocation().equals(location)) {
                        to_return.add(u);
                    }
                }
            } else {
                for (User u: users) {
                    to_return.add(u);
                }
            }

            List<User> a = new ArrayList<>(to_return);

            if (a.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(a, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/sp/service")
    public ResponseEntity<List<User>> getServices(@RequestParam(required = false) String service) {
        try {
            List<User> users = new ArrayList<>();
            userRepository.findByRole(ERole.ROLE_SP).forEach(users::add);

            Set<User> to_return = new HashSet<>();

            if (service != null) {
                for (User u: users) {
                    if (u.getSptype().equals(service)) {
                        to_return.add(u);
                    }
                }
            } else {
                for (User u: users) {
                    to_return.add(u);
                }
            }

            List<User> a = new ArrayList<>(to_return);

            if (a.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(a, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/verify")
    public ResponseEntity<?> verifyCustomer(@RequestParam(required = false) String token){
        try {
            SecureToken secureToken = secureTokenService.findByToken(token);
            if (Objects.isNull(secureToken) || !StringUtils.equals(token, secureToken.getToken()) || secureToken.isExpired()){
                throw new Exception("Token is not valid");
            }
            User user = userRepository.getOne(secureToken.getUser().getId());
            if (Objects.isNull(user)){
                throw new Exception("User not exist");
            }
            user.setVerifiedStatus(true);
            userRepository.save(user);

            secureTokenService.removeToken(secureToken);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Token is not valid"));
        }

        return ResponseEntity.ok(new MessageResponse("User activated successfully!"));
    }

    @GetMapping("/sp/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") long id) {
        Optional<User> UserData = userRepository.findById(id);

        if (UserData.isPresent()) {
            return new ResponseEntity<>(UserData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/sp/{id}/settings-profile")
    public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
        Optional<User> UserData = userRepository.findById(id);

        if (UserData.isPresent()) {
            User _user = UserData.get();
            _user.setName(user.getName());
            _user.setLocation(user.getLocation());
            _user.setPhone(user.getPhone());
            _user.setWebsite(user.getWebsite());
            _user.setSptype(user.getSptype());
            _user.setVed(user.getVed());
            _user.setQualified(user.getQualified());
            _user.setDescription(user.getDescription());
            _user.setLogo(user.getLogo());

            return new ResponseEntity<>(userRepository.save(_user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}/settings-profile")
    public ResponseEntity<User> updateSP(@PathVariable("id") long id, @RequestBody User user) {
        Optional<User> UserData = userRepository.findById(id);

        if (UserData.isPresent()) {
            User _user = UserData.get();
            _user.setName(user.getName());
            _user.setPhone(user.getPhone());
            _user.setEmail(user.getEmail());
            _user.setWebsite(user.getWebsite());

            return new ResponseEntity<>(userRepository.save(_user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/project")
    public ResponseEntity<Project> createProject(@RequestBody Project tutorial) {
        try {
            Project _tutorial = projectRepository
                    .save(new Project(tutorial.getName(), tutorial.getDate(), tutorial.getPdf(), tutorial.getOwner()));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/project/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable("id") long id, @RequestBody Project project) {
        Optional<Project> ProjectData = projectRepository.findById(id);

        if (ProjectData.isPresent()) {
            Project _project = ProjectData.get();
            _project.setName(project.getName());
            _project.setDate(project.getDate());
            _project.setPdf(project.getPdf());

            return new ResponseEntity<>(projectRepository.save(_project), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/project")
    public ResponseEntity<List<Project>> getProjects(@RequestParam(required = false) Long owner) {
        try {
            List<Project> projects = new ArrayList<>();
            projectRepository.findByOwner(owner).forEach(projects::add);

            if (projects.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(projects, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/client")
    public ResponseEntity<Client> createclient(@RequestBody Client tutorial) {
        try {
            Client _tutorial = clientRepository
                    .save(new Client(tutorial.getName(), tutorial.getDate(), tutorial.getPdf(), tutorial.getOwner()));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/client/{id}")
    public ResponseEntity<Client> updateclient(@PathVariable("id") long id, @RequestBody Client client) {
        Optional<Client> clientData = clientRepository.findById(id);

        if (clientData.isPresent()) {
            Client _client = clientData.get();
            _client.setName(client.getName());
            _client.setDate(client.getDate());
            _client.setPdf(client.getPdf());

            return new ResponseEntity<>(clientRepository.save(_client), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/client")
    public ResponseEntity<List<Client>> getclients(@RequestParam(required = false) Long owner) {
        try {
            List<Client> clients = new ArrayList<>();
            clientRepository.findByOwner(owner).forEach(clients::add);

            if (clients.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(clients, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/qualification")
    public ResponseEntity<Qualification> createqualification(@RequestBody Qualification tutorial) {
        try {
            Qualification _tutorial = qualificationRepository
                    .save(new Qualification(tutorial.getName(), tutorial.getDate(), tutorial.getPdf(), tutorial.getOwner()));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/qualification/{id}")
    public ResponseEntity<Qualification> updatequalification(@PathVariable("id") long id, @RequestBody Qualification qualification) {
        Optional<Qualification> qualificationData = qualificationRepository.findById(id);

        if (qualificationData.isPresent()) {
            Qualification _qualification = qualificationData.get();
            _qualification.setName(qualification.getName());
            _qualification.setDate(qualification.getDate());
            _qualification.setPdf(qualification.getPdf());

            return new ResponseEntity<>(qualificationRepository.save(_qualification), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/qualification")
    public ResponseEntity<List<Qualification>> getqualifications(@RequestParam(required = false) Long owner) {
        try {
            List<Qualification> qualifications = new ArrayList<>();
            qualificationRepository.findByOwner(owner).forEach(qualifications::add);

            if (qualifications.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(qualifications, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}