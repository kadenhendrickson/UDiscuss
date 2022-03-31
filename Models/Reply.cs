using System;
using System.Collections.Generic;

namespace UDiscuss.Models
{
    public partial class Reply
    {
        public Reply()
        {
            InverseParentReplyNavigation = new HashSet<Reply>();
        }

        public uint PostId { get; set; }
        public uint? ParentReply { get; set; }
        public uint ReplyId { get; set; }
        public uint AuthorId { get; set; }
        public DateTime DateCreated { get; set; }
        public string Body { get; set; } = null!;
        public bool Endorsed { get; set; }

        public virtual User Author { get; set; } = null!;
        public virtual Reply? ParentReplyNavigation { get; set; }
        public virtual Post Post { get; set; } = null!;
        public virtual ICollection<Reply> InverseParentReplyNavigation { get; set; }
    }
}
