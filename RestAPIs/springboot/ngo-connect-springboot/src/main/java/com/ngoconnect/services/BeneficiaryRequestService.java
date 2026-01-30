package com.ngoconnect.services;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ngoconnect.dto.BeneficiaryRequestDTO;
import com.ngoconnect.dto.BeneficiaryRequestUpdateDTO;
import com.ngoconnect.entities.BeneficiaryRequest;
import com.ngoconnect.entities.Item;
import com.ngoconnect.entities.User;
import com.ngoconnect.repositories.BeneficiaryRequestRepository;
import com.ngoconnect.repositories.ItemRepository;
import com.ngoconnect.repositories.UserRepository;

@Service
public class BeneficiaryRequestService {

    @Autowired
    private BeneficiaryRequestRepository requestRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ItemRepository itemRepo;

    public BeneficiaryRequest createRequest(
            int beneficiaryId,
            int itemId,
            BigDecimal amountNeeded,
            String description,
            MultipartFile proof
    ) {

        User beneficiary = userRepo.findById(beneficiaryId)
            .orElseThrow(() -> new RuntimeException("Beneficiary not found"));

        Item item = itemRepo.findById(itemId)
            .orElseThrow(() -> new RuntimeException("Item not found"));

        String fileName;

        try {
            Path uploadDir = Paths.get("uploads");
            if (!Files.exists(uploadDir)) {
                Files.createDirectories(uploadDir);
            }

            fileName = System.currentTimeMillis() + "_" + proof.getOriginalFilename();
            Path path = uploadDir.resolve(fileName);

            Files.copy(proof.getInputStream(), path);

        } catch (IOException e) {
            throw new RuntimeException("Failed to upload proof document");
        }


        BeneficiaryRequest req = new BeneficiaryRequest();
        req.setBeneficiary(beneficiary);
        req.setItem(item);
        req.setAmountNeeded(amountNeeded);
        req.setDescription(description);
        req.setRequestStatus("OPEN");
        req.setRequestDate(LocalDateTime.now());
        req.setProofDocument(fileName);

        return requestRepo.save(req);
    }

    public List<BeneficiaryRequest> getMyRequests(int beneficiaryId) {
        return requestRepo.findByBeneficiary_UserId(beneficiaryId);
    }
    
    public BeneficiaryRequest updateRequest(int requestId, BeneficiaryRequestUpdateDTO dto) {

        BeneficiaryRequest req = requestRepo.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Request not found"));

        req.setAmountNeeded(dto.getAmountNeeded());
        req.setDescription(dto.getDescription());

        return requestRepo.save(req);
    }

    public void deleteRequest(int id) {
        requestRepo.deleteById(id);
    }
    
    
    
    
    
    

}
