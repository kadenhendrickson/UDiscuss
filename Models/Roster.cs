using System;
using System.Collections.Generic;

namespace UDiscuss.Models
{
    public partial class Roster
    {
        public uint UserId { get; set; }
        public uint ClassId { get; set; }
        public string Role { get; set; } = null!;

        public virtual Class Class { get; set; } = null!;
        public virtual User User { get; set; } = null!;
    }
}
