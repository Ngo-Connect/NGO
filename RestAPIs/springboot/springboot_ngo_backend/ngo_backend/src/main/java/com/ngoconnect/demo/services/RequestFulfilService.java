package com.ngoconnect.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ngoconnect.demo.repository.RequestFulfilRepo;

@Service
public class RequestFulfilService {
	@Autowired
	RequestFulfilRepo rf;
	 public int getTotalImpact(int donor_id) {
		 return rf.getImpact(donor_id);
	 }
}
