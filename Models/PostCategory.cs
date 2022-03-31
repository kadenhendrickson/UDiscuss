using System;
using System.Collections.Generic;

namespace UDiscuss.Models
{
    public partial class PostCategory
    {
        public PostCategory()
        {
            Posts = new HashSet<Post>();
        }

        public uint CategoryId { get; set; }
        public string Name { get; set; } = null!;
        public uint ClassId { get; set; }

        public virtual Class Class { get; set; } = null!;
        public virtual ICollection<Post> Posts { get; set; }
    }
}
