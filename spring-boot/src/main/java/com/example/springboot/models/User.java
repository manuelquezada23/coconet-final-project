package com.example.springboot.models;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import java.util.Objects;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.example.springboot.security.token.SecureToken;

@Entity
@Table(	name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    //@Column(name = "username")
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    //@Column(name = "email")
    private String email;

    @NotBlank
    @Size(max = 120)
    private String password;

    @NotBlank
    private boolean verified;
  
    private ERole role;

    private String location;
    private String phone;
    private String website;
    private String sptype;
    private boolean ved;
    private boolean qualified;
    private String description;
    private String logo;


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @OneToMany(mappedBy="user")
    private Set<SecureToken> tokens = new HashSet<>();

    public User() {}

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (null == o || getClass() != o.getClass()) return false;
        User u = (User) o;
        return Objects.equals(id, u.id) &&
                Objects.equals(email, u.email) &&
                Objects.equals(username, u.username);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, email);
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return username;
    }
    public void setName(String name) {
        this.username = name;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public Set<Role> getRoles() { return roles; }
    public void setRoles(Set<Role> roles) { this.roles = roles; }

    public @NotBlank boolean getVerifiedStatus() { return verified; }
    public void setVerifiedStatus(boolean verified) { this.verified = verified; }

    public ERole getRole() { return role; }
    public void setRole(ERole role) { this.role = role; }

    public String getLocation() {
        return location;
    }
    public void setLocation(String email) {
        this.location = email;
    }

    public String getPhone() {
        return phone;
    }
    public void setPhone(String email) {
        this.phone = email;
    }

    public String getWebsite() {
        return website;
    }
    public void setWebsite(String email) {
        this.website = email;
    }

    public String getSptype() {
        return sptype;
    }
    public void setSptype(String email) {
        this.sptype = email;
    }

    public boolean getVed() {
        return ved;
    }
    public void setVed(boolean email) {
        this.ved = email;
    }

    public boolean getQualified() {
        return qualified;
    }
    public void setQualified(boolean email) {
        this.qualified = email;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String email) {
        this.description = email;
    }

    public String getLogo() {
        return logo;
    }
    public void setLogo(String email) {
        this.logo = email;
    }
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + username + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
