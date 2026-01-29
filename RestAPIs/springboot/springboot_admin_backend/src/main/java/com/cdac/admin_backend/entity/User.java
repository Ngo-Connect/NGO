package com.cdac.admin_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users") // MUST match your DB table name
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;
    
    @Column(name = "phone_no")
    private String phoneNo;

    @Column(name = "account_status")
    private String accountStatus;

    // Relationship with Role
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    // Add other fields (address, city_id, etc.) if you need to display them
}
