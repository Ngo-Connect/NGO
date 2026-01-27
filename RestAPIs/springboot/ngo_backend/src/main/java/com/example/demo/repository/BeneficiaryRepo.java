package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.BeneficiaryReq;
@Repository
public interface BeneficiaryRepo extends JpaRepository<BeneficiaryReq, Integer> {

	// basic crud operations like findall, save, delete , findbyid already present
}
