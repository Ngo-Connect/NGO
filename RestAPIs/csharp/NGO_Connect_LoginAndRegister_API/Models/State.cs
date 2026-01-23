using System;
using System.Collections.Generic;

namespace NGO_Connect_LoginAndRegister_API.Models;

public partial class State
{
    public int StateId { get; set; }

    public string StateName { get; set; } = null!;

    public virtual ICollection<City> Cities { get; set; } = new List<City>();

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
