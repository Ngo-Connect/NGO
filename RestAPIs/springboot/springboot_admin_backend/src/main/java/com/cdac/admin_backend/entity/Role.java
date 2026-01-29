package com.cdac.admin_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "roles") // MUST match your DB table name
@Data
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private int roleId;

    @Column(name = "role_name")
    private String roleName;
}