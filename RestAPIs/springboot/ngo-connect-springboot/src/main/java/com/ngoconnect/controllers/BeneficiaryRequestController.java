package com.ngoconnect.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ngoconnect.entities.BeneficiaryRequest;
import com.ngoconnect.services.BeneficiaryRequestService;

@RestController
@RequestMapping("/api/beneficiary")
@CrossOrigin(origins = "*")
public class BeneficiaryRequestController {

    @Autowired
    private BeneficiaryRequestService service;

    // 1️⃣ Beneficiary sends a new request
    @PostMapping("/request")
    public BeneficiaryRequest createRequest(
            @RequestBody BeneficiaryRequest request) {
        return service.createRequest(request);
    }

    // 2️⃣ Beneficiary views own requests
    @GetMapping("/requests/{beneficiaryId}")
    public List<BeneficiaryRequest> getRequestsByBeneficiary(
            @PathVariable Integer beneficiaryId) {
        return service.getRequestsByBeneficiary(beneficiaryId);
    }

    // 3️⃣ Beneficiary closes a request
    @PutMapping("/request/{requestId}/close")
    public BeneficiaryRequest closeRequest(
            @PathVariable Integer requestId) {
        return service.closeRequest(requestId);
    }
}
