package com.ngoconnect.controllers;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.ngoconnect.entities.BeneficiaryRequest;
import com.ngoconnect.services.BeneficiaryRequestService;
import com.ngoconnect.dto.BeneficiaryRequestUpdateDTO;

@RestController
@RequestMapping("/api/beneficiary")
@CrossOrigin(origins = "http://localhost:5173")
public class BeneficiaryRequestController {

    @Autowired
    private BeneficiaryRequestService service;

    // CREATE REQUEST WITH PROOF
    @PostMapping(
        value = "/request",
        consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public BeneficiaryRequest create(
            @RequestParam int beneficiaryId,
            @RequestParam int itemId,
            @RequestParam BigDecimal amountNeeded,
            @RequestParam String description,
            @RequestParam MultipartFile proof
    ) {
        return service.createRequest(
            beneficiaryId,
            itemId,
            amountNeeded,
            description,
            proof
        );
    }

    // GET REQUESTS BY BENEFICIARY
    @GetMapping("/requests/{id}")
    public List<BeneficiaryRequest> myRequests(@PathVariable int id) {
        return service.getMyRequests(id);
    }

    // UPDATE REQUEST (amount + description)
    @PutMapping("/request/{id}")
    public BeneficiaryRequest updateRequest(
            @PathVariable int id,
            @RequestBody BeneficiaryRequestUpdateDTO dto
    ) {
        return service.updateRequest(id, dto);
    }

    // DELETE REQUEST
    @DeleteMapping("/request/{id}")
    public void delete(@PathVariable int id) {
        service.deleteRequest(id);
    }
}
