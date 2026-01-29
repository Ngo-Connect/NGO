package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.BeneficiaryReq;
import com.example.demo.repository.BeneficiaryRepo;

@Service
public class BeneficiaryService {
	@Autowired
	BeneficiaryRepo brepo;
	
	public List <BeneficiaryReq> getAllRequest(){
		return brepo.findAll();
	}
	public int getCount() {
		return brepo.activeCount();
	}
	
}
