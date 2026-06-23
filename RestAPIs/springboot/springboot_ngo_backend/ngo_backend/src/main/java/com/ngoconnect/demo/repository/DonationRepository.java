package com.ngoconnect.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ngoconnect.demo.entity.Donation;

public interface DonationRepository extends JpaRepository<Donation, Integer> {

}
