package com.ngoconnect.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ngoconnect.demo.entity.Users;

public interface UsersRepo extends JpaRepository<Users, Integer> {

}
