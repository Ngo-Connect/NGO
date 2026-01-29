package com.ngoconnect.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ngoconnect.entities.BeneficiaryRequest;
import com.ngoconnect.repositories.BeneficiaryRequestRepository;

@Service
public class BeneficiaryRequestServiceImpl implements BeneficiaryRequestService {

    @Autowired
    private BeneficiaryRequestRepository repository;

    @Override
    public BeneficiaryRequest createRequest(BeneficiaryRequest request) {
        request.setRequestDate(LocalDateTime.now());
        request.setRequestStatus("OPEN");
        return repository.save(request);
    }

    @Override
    public List<BeneficiaryRequest> getRequestsByBeneficiary(Integer beneficiaryId) {
        return repository.findAll()
                .stream()
                .filter(r -> r.getBeneficiaryId().equals(beneficiaryId))
                .toList();
    }

    @Override
    public BeneficiaryRequest closeRequest(Integer requestId) {
        BeneficiaryRequest request = repository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Request not found"));

        request.setRequestStatus("CLOSED");
        return repository.save(request);
    }
}
