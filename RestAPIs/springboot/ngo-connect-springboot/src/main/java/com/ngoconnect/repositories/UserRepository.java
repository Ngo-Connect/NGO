package com.ngoconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ngoconnect.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}
