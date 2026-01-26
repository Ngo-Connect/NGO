package com.ngoconnect.services;

import java.util.List;
import com.ngoconnect.entities.BeneficiaryRequest;

public interface BeneficiaryRequestService {

    BeneficiaryRequest createRequest(BeneficiaryRequest request);

    List<BeneficiaryRequest> getRequestsByBeneficiary(Integer beneficiaryId);

    BeneficiaryRequest closeRequest(Integer requestId);
}
