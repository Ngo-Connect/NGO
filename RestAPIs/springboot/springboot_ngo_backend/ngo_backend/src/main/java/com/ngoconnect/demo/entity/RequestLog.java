package com.ngoconnect.demo.entity;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="request_fulfil_log")
public class RequestLog {
	@Id
	private int request_id;
	private int benf_id;
	private int donor_id;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date donation_date;
	private int donation_item_id;
	
}
