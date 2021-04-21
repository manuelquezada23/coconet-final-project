package com.example.springboot.models;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import java.util.Objects;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.example.springboot.security.token.SecureToken;

@Entity
@Table(	name = "clients",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "name")
        })

public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    //@Column(name = "name")
    private String name;

    private String date;
    private String pdf;
    private Long owner;

    public Client() {}

    public Client(String name, String date, String pdf, Long owner) {
        this.name = name;
        this.date = date;
        this.pdf = pdf;
        this.owner = owner;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (null == o || getClass() != o.getClass()) return false;
        Client u = (Client) o;
        return Objects.equals(id, u.id) &&
                Objects.equals(date, u.date) &&
                Objects.equals(name, u.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, date);
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }

    public String getPdf() {
        return pdf;
    }
    public void setPdf(String date) {
        this.pdf = date;
    }

    public Long getOwner() {
        return owner;
    }
    public void setOwner(Long date) {
        this.owner = date;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
