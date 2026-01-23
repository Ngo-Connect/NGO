using System;
using System.Collections.Generic;

namespace NGO_Connect_LoginAndRegister_API.Models;

public partial class User
{
    public int UserId { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int RoleId { get; set; }

    public string PhoneNo { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string PanNo { get; set; } = null!;

    public string AccountStatus { get; set; } = null!;

    public string? Address { get; set; }

    public int? StateId { get; set; }

    public int? CityId { get; set; }

    public int? RegNo { get; set; }

    public virtual ICollection<BeneficiaryRequest> BeneficiaryRequests { get; set; } = new List<BeneficiaryRequest>();

    public virtual City? City { get; set; }

    public virtual ICollection<Donation> Donations { get; set; } = new List<Donation>();

    public virtual Role Role { get; set; } = null!;

    public virtual State? State { get; set; }
}
