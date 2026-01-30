package com.ngoconnect.entities;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "beneficiary_request")
@Getter @Setter
public class BeneficiaryRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int requestId;

    @ManyToOne
    @JoinColumn(name = "beneficiary_id")
    private User beneficiary;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;
    private String proofDocument;

    private BigDecimal amountNeeded;
    private String description;
    private String requestStatus;

    private LocalDateTime requestDate;
}
