package com.ngoconnect.dto;


import java.math.BigDecimal;

import org.springframework.web.multipart.MultipartFile;

public class BeneficiaryRequestDTO {

    private int beneficiaryId;
    private int itemId;
    private BigDecimal amountNeeded;
    private String description;
    private String requestStatus;
    private MultipartFile proofDocument;

    // getters & setters
    public int getBeneficiaryId() { return beneficiaryId; }
    public void setBeneficiaryId(int beneficiaryId) { this.beneficiaryId = beneficiaryId; }

    public int getItemId() { return itemId; }
    public void setItemId(int itemId) { this.itemId = itemId; }

    public BigDecimal getAmountNeeded() { return amountNeeded; }
    public void setAmountNeeded(BigDecimal amountNeeded) { this.amountNeeded = amountNeeded; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getRequestStatus() { return requestStatus; }
    public void setRequestStatus(String requestStatus) { this.requestStatus = requestStatus; }
}
