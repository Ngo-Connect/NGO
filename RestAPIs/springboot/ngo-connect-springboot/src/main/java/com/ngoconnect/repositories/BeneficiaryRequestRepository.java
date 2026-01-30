package com.ngoconnect.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ngoconnect.entities.BeneficiaryRequest;

@Repository
public interface BeneficiaryRequestRepository
        extends JpaRepository<BeneficiaryRequest, Integer> {
	List<BeneficiaryRequest> findByBeneficiary_UserId(int beneficiaryId);



}

