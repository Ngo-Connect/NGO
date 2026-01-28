package com.ngoconnect.entities;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "beneficiary_request")
public class BeneficiaryRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "request_id")
    private Integer requestId;

    @Column(name = "beneficiary_id", nullable = false)
    private Integer beneficiaryId;

    @Column(name = "item_id", nullable = false)
    private Integer itemId;

    @Column(name = "amount_needed")
    private Double amountNeeded;

    @Column(name = "description")
    private String description;

    @Column(name = "request_date")
    private LocalDateTime requestDate;

    @Column(name = "request_status")
    private String requestStatus;

    // ---------- Constructors ----------
    public BeneficiaryRequest() {}

    // ---------- Getters & Setters ----------
    public Integer getRequestId() {
        return requestId;
    }

    public void setRequestId(Integer requestId) {
        this.requestId = requestId;
    }

    public Integer getBeneficiaryId() {
        return beneficiaryId;
    }

    public void setBeneficiaryId(Integer beneficiaryId) {
        this.beneficiaryId = beneficiaryId;
    }

    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }

    public Double getAmountNeeded() {
        return amountNeeded;
    }

    public void setAmountNeeded(Double amountNeeded) {
        this.amountNeeded = amountNeeded;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(LocalDateTime requestDate) {
        this.requestDate = requestDate;
    }

    public String getRequestStatus() {
        return requestStatus;
    }

    public void setRequestStatus(String requestStatus) {
        this.requestStatus = requestStatus;
    }
}
