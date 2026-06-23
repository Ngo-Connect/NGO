package com.ngoconnect.demo.dto;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data

@AllArgsConstructor
@NoArgsConstructor
public class DonationDTO {
	private int user_id;
	private Double amount_donated;
	private int benef_request_id;
	private String description;
	private int item_id;
}
