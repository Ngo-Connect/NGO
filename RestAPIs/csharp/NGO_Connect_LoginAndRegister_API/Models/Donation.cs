using System;
using System.Collections.Generic;

namespace NGO_Connect_LoginAndRegister_API.Models;

public partial class Donation
{
    public int DonationId { get; set; }

    public int UserId { get; set; }

    public int ItemId { get; set; }

    public DateTime? DonationDate { get; set; }

    public string? Description { get; set; }

    public decimal? Amount { get; set; }

    public virtual Item Item { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
