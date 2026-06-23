package com.ngoconnect.demo.entity;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name ="beneficiary_request")


public class BeneficiaryReq {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int request_id;
	@OneToOne
	@JoinColumn(name="beneficiary_id")
	private Users user;
	// as intially the ngo id wont be binded so using wrapper class
	private Integer ngo_id;
	private int item_id;
	private Double amount_needed;
	private String description;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date request_date;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date expire_date;
	private String request_status = "PENDING";
	private String proof_document;
//	@jakarta.persistence.Transient
	private Double amount_collected;
	
}
