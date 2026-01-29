package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.BeneficiaryReq;
@Repository
public interface BeneficiaryRepo extends JpaRepository<BeneficiaryReq, Integer> {

	// basic crud operations like findall, save, delete , findbyid already present
	@Query( value ="Select count(*) from beneficiary_request br where br.request_status= 'ACTIVE'", nativeQuery = true)
	public int activeCount(); // active isof string type therefore used in single quotes
}
