package com.cdac.admin_backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.cdac.admin_backend.entity.User;
import com.cdac.admin_backend.repository.UserRepository;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173") // Allow React Frontend
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    // 1. Get All Users (Except Admins)
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAllNonAdminUsers();
    }

    // 2. Delete User
    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable int id) {
        userRepository.deleteById(id);
        return "User deleted successfully";
    }

    // 3. Toggle Account Status (Optional Edit Feature)
    @PutMapping("/users/{id}/status")
    public User toggleStatus(@PathVariable int id) {
        User user = userRepository.findById(id).orElseThrow();
        if("Active".equals(user.getAccountStatus())) {
            user.setAccountStatus("Inactive");
        } else {
            user.setAccountStatus("Active");
        }
        return userRepository.save(user);
    }
}
