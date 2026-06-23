package com.ngoconnect.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ngoconnect.demo.entity.Ngo;
@Repository
public interface NgoFundRepo extends JpaRepository<Ngo, Integer> {
	@Query(value ="Select current_fund from ngo_funds  where ngo_id= :ngoId", nativeQuery = true)
	public double currFund(@Param("ngoId")int ngoId);
	
	// for total funds received till date
	@Query(value ="Select funds from ngo_funds  where ngo_id= :ngoId", nativeQuery = true)
	public double totalFund(@Param("ngoId") int ngoId);

}
