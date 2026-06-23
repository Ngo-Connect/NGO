package com.ngoconnect.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ngoconnect.demo.entity.BeneficiaryReq;
import com.ngoconnect.demo.repository.BeneficiaryRepo;

@Service
public class BeneficiaryService {
	@Autowired
	BeneficiaryRepo brepo;
	
	public List <BeneficiaryReq> getAllRequest(String status){
		return brepo.findByRequest_status(status);
	}
	public int getActiveCount(Integer ngo_id) {
		return brepo.activeCount(ngo_id);
	}
	public int getPendingCount() {
		return brepo.pendingCount();
	}
	public int approveReq(int benef_id, String change, int ngo_id) {
		return brepo.setBenefStatus(benef_id, change, ngo_id);
	}
	public List <BeneficiaryReq> findUnderTakenReqs(Integer ngo_id){
		return brepo.findUndertakenReq(ngo_id);
	}
	
}
