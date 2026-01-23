using System;
using System.Collections.Generic;

namespace NGO_Connect_LoginAndRegister_API.Models;

public partial class BeneficiaryRequest
{
    public int RequestId { get; set; }

    public int BeneficiaryId { get; set; }

    public int ItemId { get; set; }

    public decimal? AmountNeeded { get; set; }

    public string? Description { get; set; }

    public DateTime? RequestDate { get; set; }

    public string RequestStatus { get; set; } = null!;

    public virtual User Beneficiary { get; set; } = null!;

    public virtual Item Item { get; set; } = null!;
}
