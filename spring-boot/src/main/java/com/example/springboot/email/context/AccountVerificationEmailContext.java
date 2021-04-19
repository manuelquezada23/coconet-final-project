package com.example.springboot.email.context;

import com.example.springboot.models.User;
import org.springframework.web.util.UriBuilder;
import org.springframework.web.util.UriComponentsBuilder;

public class AccountVerificationEmailContext extends AbstractEmailContext {

    private String token;


    @Override
    public <T> void init(T context){
        //we can do any common configuration setup here
        // like setting up some base URL and context
        User customer = (User) context;
        put("firstName", customer.getName());
        setTemplateLocation("greeting");
        setSubject("Complete your registration");
        setFrom("2730195816@qq.com");
        setTo(customer.getEmail());
    }

    public void setToken(String token) {
        this.token = token;
        put("token", token);
    }

    public void buildVerificationUrl(final String baseURL, final String token){
        final String url= UriComponentsBuilder.fromHttpUrl(baseURL)
                .path("/api/auth/verify").queryParam("token", token).toUriString();
        put("verificationURL", url);
    }
}