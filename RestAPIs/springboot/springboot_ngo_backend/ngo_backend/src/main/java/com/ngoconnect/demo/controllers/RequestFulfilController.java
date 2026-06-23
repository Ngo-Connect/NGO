package com.ngoconnect.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ngoconnect.demo.services.RequestFulfilService;
@RequestMapping("/ngo")
@RestController
//@CrossOrigin(origins = "http://localhost:5173")
public class RequestFulfilController {
	@Autowired
	RequestFulfilService rs;
	@GetMapping("/getimpact/{donor_id}")
	public int getImpactCount(@PathVariable("donor_id") int donor_id) {
		return rs.getTotalImpact(donor_id);
	}
}
