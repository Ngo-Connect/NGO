package com.ngoconnect.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "ngo_funds") 
@Entity
public class Ngo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ngo_id;
	private double funds=0.0;
	private double current_fund=0.0;

}
