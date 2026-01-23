using System;
using System.Collections.Generic;

namespace NGO_Connect_LoginAndRegister_API.Models;

public partial class RequestFulfilLog
{
    public int RequestId { get; set; }

    public int? BenfId { get; set; }

    public string? DonorId { get; set; }

    public DateTime? DonationDate { get; set; }

    public int? DonationItemId { get; set; }
}
