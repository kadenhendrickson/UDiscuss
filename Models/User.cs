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
            Classes = new HashSet<Class>();
            Classes1 = new HashSet<Class>();
            ClassesNavigation = new HashSet<Class>();
        }

        public uint UserId { get; set; }
        public string FirstName { get; set; } = null!;
        public string? LastName { get; set; }
        public string? Email { get; set; }

        public virtual Admin Admin { get; set; } = null!;
        public virtual ICollection<Post> Posts { get; set; }
        public virtual ICollection<Reply> Replies { get; set; }

        public virtual ICollection<Class> Classes { get; set; }
        public virtual ICollection<Class> Classes1 { get; set; }
        public virtual ICollection<Class> ClassesNavigation { get; set; }
    }
}
