using System;
using System.Collections.Generic;

namespace UDiscuss.Models
{
    public partial class User
    {
        public User()
        {
            Posts = new HashSet<Post>();
            Replies = new HashSet<Reply>();
            Rosters = new HashSet<Roster>();
        }

        public uint UserId { get; set; }
        public string FirstName { get; set; } = null!;
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public bool IsAdmin { get; set; }

        public virtual ICollection<Post> Posts { get; set; }
        public virtual ICollection<Reply> Replies { get; set; }
        public virtual ICollection<Roster> Rosters { get; set; }
    }
}
