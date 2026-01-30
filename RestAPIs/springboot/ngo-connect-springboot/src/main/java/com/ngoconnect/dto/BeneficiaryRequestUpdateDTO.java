package com.ngoconnect.dto;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class BeneficiaryRequestUpdateDTO {
    private BigDecimal amountNeeded;
    private String description;
}
