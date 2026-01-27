package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.BeneficiaryReq;
import com.example.demo.services.BeneficiaryService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class BeneficiaryController {
	@Autowired
	BeneficiaryService bs;
	@GetMapping("getAll")
	public List <BeneficiaryReq> getAll(){
		return bs.getAllRequest();
	}
//	@GetMapping
//	public int getBeneficiaryCount(@RequestParam int benf_id){
//		
//	}
//	@GetMapping
//	public List <BeneficiaryReq> getAllRequest(@RequestParam int benf_id){
//		
//	}
}
