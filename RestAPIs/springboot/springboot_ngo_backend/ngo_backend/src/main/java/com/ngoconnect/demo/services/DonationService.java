package com.ngoconnect.demo.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ngoconnect.demo.dto.DonationDTO;
import com.ngoconnect.demo.entity.BeneficiaryReq;
import com.ngoconnect.demo.entity.Donation;
import com.ngoconnect.demo.repository.BeneficiaryRepo;
import com.ngoconnect.demo.repository.DonationRepository;
import com.ngoconnect.demo.repository.UsersRepo;
import jakarta.transaction.Transactional;

@Service
public class DonationService {

    private final UsersRepo usersRepo;
	
	@Autowired
	private DonationRepository donationRepo;

	@Autowired
    private BeneficiaryRepo beneficiaryRepo;

    DonationService(UsersRepo usersRepo) {
        this.usersRepo = usersRepo;
    }

	@Transactional
	public void initiateDonation(DonationDTO dt) {
		BeneficiaryReq br = beneficiaryRepo.findById(dt.getBenef_request_id()).orElseThrow(()-> new RuntimeException("Cant find request"));
				double current = (br.getAmount_collected()!=null) ? dt.getAmount_donated():0.0;
				Double newTotal = current + dt.getAmount_donated(); 
				if(newTotal > br.getAmount_needed()) {
					throw new RuntimeException("Amount exceeded the required aamount");
				}
				br.setAmount_collected(newTotal);
				System.out.println("Old Total: " + br.getAmount_collected());
				
				Donation newDonation = new Donation();
				newDonation.setAmount_donated(dt.getAmount_donated());
				newDonation.setBenef_request_id(br);
				newDonation.setUser_id(usersRepo.findById(dt.getUser_id()).orElseThrow(()-> new RuntimeException("cant get userId")));
				newDonation.setItem_id(dt.getItem_id());
				newDonation.setDonation_date(new java.sql.Date(System.currentTimeMillis()));
				newDonation.setDescription(dt.getDescription());
				beneficiaryRepo.updateAmount(newTotal, br.getRequest_id());
				donationRepo.save(newDonation);
//				beneficiaryRepo.save(br);
	}
}