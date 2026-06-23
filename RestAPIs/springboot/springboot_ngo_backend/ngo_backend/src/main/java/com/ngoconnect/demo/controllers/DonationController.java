package com.ngoconnect.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ngoconnect.demo.dto.DonationDTO;
import com.ngoconnect.demo.entity.Donation;
import com.ngoconnect.demo.services.DonationService;

@RestController
@RequestMapping("/ngo")
public class DonationController {
	@Autowired
    private DonationService donationService;

    @PostMapping("/donate")
    public ResponseEntity<String> donateTo(@RequestBody DonationDTO donation) {
    	donationService.initiateDonation(donation);
        return ResponseEntity.ok("Donation Successful");
    }
    
}
