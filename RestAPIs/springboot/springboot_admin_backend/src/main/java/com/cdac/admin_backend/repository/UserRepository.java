package com.cdac.admin_backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.cdac.admin_backend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    
    // Custom query to fetch all users EXCEPT Admins (Role ID 1)
    // We assume '1' is Admin based on your screenshot
    @Query("SELECT u FROM User u WHERE u.role.roleId != 1")
    List<User> findAllNonAdminUsers();
}