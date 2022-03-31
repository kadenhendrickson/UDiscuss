using System;
using System.Collections.Generic;

namespace UDiscuss.Models
{
    public partial class Class
    {
        public Class()
        {
            PostCategories = new HashSet<PostCategory>();
            Posts = new HashSet<Post>();
            Users = new HashSet<User>();
            Users1 = new HashSet<User>();
            UsersNavigation = new HashSet<User>();
        }

        public uint ClassId { get; set; }
        public string FullName { get; set; } = null!;
        public string ShortName { get; set; } = null!;
        public string Semester { get; set; } = null!;
        public short Year { get; set; }

        public virtual ICollection<PostCategory> PostCategories { get; set; }
        public virtual ICollection<Post> Posts { get; set; }

        public virtual ICollection<User> Users { get; set; }
        public virtual ICollection<User> Users1 { get; set; }
        public virtual ICollection<User> UsersNavigation { get; set; }
    }
}
