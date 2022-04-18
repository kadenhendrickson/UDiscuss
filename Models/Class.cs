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
            Rosters = new HashSet<Roster>();
        }

        public uint ClassId { get; set; }
        public string FullName { get; set; } = null!;
        public string? ShortName { get; set; }
        public string Semester { get; set; } = null!;
        public short Year { get; set; }

        public virtual ICollection<PostCategory> PostCategories { get; set; }
        public virtual ICollection<Post> Posts { get; set; }
        public virtual ICollection<Roster> Rosters { get; set; }
    }
}
