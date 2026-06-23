package com.ngoconnect.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ngoconnect.demo.services.NgoFundService;

@RestController
@RequestMapping("/ngo")
//@CrossOrigin(origins = "http://localhost:5173")
public class NgoController {
	@Autowired
	NgoFundService ns;
	@GetMapping("getcurrent/{ngo_id}")
	public double getCurrentFund(@PathVariable("ngo_id") int ngoId) {
		return ns.getCurrentFund(ngoId);
	}
	@GetMapping("gettotal/{ngo_id}")
	public double getTotalFund(@PathVariable("ngo_id") int ngoId) {
		return ns.getTotalfund(ngoId);
	}

}
