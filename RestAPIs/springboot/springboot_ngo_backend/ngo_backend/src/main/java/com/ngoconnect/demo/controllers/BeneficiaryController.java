package com.ngoconnect.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ngoconnect.demo.entity.BeneficiaryReq;
import com.ngoconnect.demo.services.BeneficiaryService;

//@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/ngo")
public class BeneficiaryController {
	@Autowired
	BeneficiaryService bs;
	@GetMapping("getAll/{status}")
	public List <BeneficiaryReq> getAll(@PathVariable("status") String status){
		return bs.getAllRequest(status);
	}
	
	@GetMapping("getActive/{ngo_id}")
	public int getActiveRequest(@PathVariable("ngo_id")Integer ngo_id) {
		return bs.getActiveCount(ngo_id);
	}
	@GetMapping("getPending")
	public int getPendingRequest() {
		return bs.getPendingCount();
	}
	@PutMapping("update/{benef_id}/{status}/{ngo_id}")
	public int setBeneficiaryStatus(@PathVariable("benef_id") int benef_id, @PathVariable("status") String change, @PathVariable("ngo_id") int ngo_id ){
		return bs.approveReq(benef_id, change,ngo_id);
	}
	@GetMapping("getUnderTakenReq/{ngo_id}")
	public List <BeneficiaryReq> getUnderTakenRequest(@PathVariable("ngo_id") Integer ngo_id){
		return bs.findUnderTakenReqs(ngo_id);
	}
}
