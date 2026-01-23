using System;
using System.Collections.Generic;

namespace NGO_Connect_LoginAndRegister_API.Models;

public partial class Item
{
    public int ItemId { get; set; }

    public string ItemName { get; set; } = null!;

    public virtual ICollection<BeneficiaryRequest> BeneficiaryRequests { get; set; } = new List<BeneficiaryRequest>();

    public virtual ICollection<Donation> Donations { get; set; } = new List<Donation>();
}
