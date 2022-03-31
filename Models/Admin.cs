using System;
using System.Collections.Generic;

namespace UDiscuss.Models
{
    public partial class Admin
    {
        public uint UserId { get; set; }

        public virtual User User { get; set; } = null!;
    }
}
