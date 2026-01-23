using System;
using System.Collections.Generic;

namespace NGO_Connect_LoginAndRegister_API.Models;

public partial class City
{
    public int CityId { get; set; }

    public int StateId { get; set; }

    public string CityName { get; set; } = null!;

    public virtual State State { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
