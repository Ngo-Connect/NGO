package com.ngoconnect.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ngoconnect.demo.repository.NgoFundRepo;

@Service
public class NgoFundService {
	@Autowired
	NgoFundRepo nr;
	public double getCurrentFund(int ngo_id) {
		return nr.currFund(ngo_id); 
	}
	public double getTotalfund(int ngo_id) {
		return nr.totalFund(ngo_id);
	}

}
