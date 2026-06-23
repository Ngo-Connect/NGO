package com.ngoconnect.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ngoconnect.demo.entity.BeneficiaryReq;

import jakarta.transaction.Transactional;

import java.util.List;

@Repository
public interface BeneficiaryRepo extends JpaRepository<BeneficiaryReq, Integer> {

	// basic crud operations like findall, save, delete , findbyid already present
	@Query( value ="Select count(*) from beneficiary_request br where br.request_status= 'APPROVED' and br.ngo_id=:ngo_id", nativeQuery = true)
	public int activeCount(@Param("ngo_id") Integer ngo_id); // active isof string type therefore used in single quotes
	
	@Query( value ="Select count(*) from beneficiary_request br where br.request_status= 'PENDING'", nativeQuery = true)
	public int pendingCount();
	
	@Query(value ="Select * from beneficiary_request br where br.request_status= :status", nativeQuery = true)
	public List<BeneficiaryReq> findByRequest_status(@Param ("status") String status);
	
	//@Query(value="Select * from beneficiary_request br where br.ngo_id = :ngo_id AND br.request_status='ACTIVE'", nativeQuery = true)
	@Query(value = "SELECT br.* from beneficiary_request br where br.ngo_id = :ngo_id AND br.request_status = 'APPROVED'",nativeQuery = true)
	public List<BeneficiaryReq> findUndertakenReq(@Param("ngo_id") Integer ngo_id);
	@Modifying
	@Transactional
	@Query(value="update beneficiary_request  set request_status = :status, ngo_id=:ngo_id where request_id=:benef_id " , nativeQuery = true)
	public int setBenefStatus(@Param("benef_id")int benef_id, @Param("status") String change, @Param("ngo_id") int ngo_id);
	
	@Modifying
	@Transactional
	@Query(value= "update beneficiary_request set amount_collected=:newTotal where request_id = :reqId", nativeQuery = true)
	public void updateAmount(@Param("newTotal") Double newTotal, @Param("reqId") int reqId);
	
	
}
