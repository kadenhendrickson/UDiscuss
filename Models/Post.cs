using System;
using System.Collections.Generic;

namespace UDiscuss.Models
{
    public partial class Post
    {
        public Post()
        {
            Replies = new HashSet<Reply>();
        }

        public uint PostId { get; set; }
        public string Title { get; set; } = null!;
        public uint CategoryId { get; set; }
        public DateTime DateCreated { get; set; }
        public uint ClassId { get; set; }
        public string Body { get; set; } = null!;
        public uint AuthorId { get; set; }
        public uint RelativeId { get; set; }

        public virtual User Author { get; set; } = null!;
        public virtual PostCategory Category { get; set; } = null!;
        public virtual Class Class { get; set; } = null!;
        public virtual ICollection<Reply> Replies { get; set; }

 
    }
}
