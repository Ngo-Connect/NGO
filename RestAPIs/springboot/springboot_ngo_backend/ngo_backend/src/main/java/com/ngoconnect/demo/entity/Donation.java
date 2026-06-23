package com.ngoconnect.demo.entity;

import java.sql.Date;
import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="donations") // Matches your MySQL table name
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int donation_id;
    
    @ManyToOne
    @JoinColumn(name="user_id")
    private Users user_id;       // The ID of the NGO making the donation
    private int item_id;       // The ID of the item being donated
    @ManyToOne
    @JoinColumn(name = "benef_request_id") // Exact match for your DB column
    private BeneficiaryReq benef_request_id; // to get from the benef_req table
    private Date donation_date;
    private String description;         
    private Double amount_donated;  
}