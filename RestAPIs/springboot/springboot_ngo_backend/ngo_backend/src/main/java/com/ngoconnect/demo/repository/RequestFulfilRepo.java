package com.ngoconnect.demo.repository;
/// CHANGE THIS REPO METHOD SO THAT O GET THE MAKE SURE TO GET THE IMPACT
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ngoconnect.demo.entity.RequestLog;

public interface RequestFulfilRepo extends JpaRepository<RequestLog, Integer> {
	@Query(value="select count(DISTINCT benf_id) from request_fulfil_log rf where rf.donor_id =:donor_id", nativeQuery = true)
	public int getImpact(@Param("donor_id") int donor_id);
}
