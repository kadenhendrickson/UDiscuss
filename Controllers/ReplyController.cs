using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UDiscuss.Models;

namespace UDiscuss.Controllers;

[ApiController]
[Route("/api/reply")]
public class ReplyController : ControllerBase
{

    protected mainContext db;

    public ReplyController()
    {
        db = new mainContext();
    }


    public class ReplyDTO
    {
        public uint id { get; set; }
        //public uint? parentReplyID { get; set; }
        public string authorFName { get; set; } = null!;
        public string authorLName { get; set; } = null!;
        public DateTime dateCreated { get; set; }
        public string body { get; set; } = null!;
        public bool endorsed { get; set; }
    }

    public class ReplyCreateDTO
    {
        //public uint? parentReplyID { get; set; }
        public uint authorID { get; set; }
        public string body { get; set; } = null!;
    }

    [HttpGet("{postID}")]
    public IEnumerable<ReplyDTO> Get(uint postID)
    {
        List<ReplyDTO> replies;
        replies = (from r in db.Replies
                 where r.PostId == postID
                 select new ReplyDTO()
                 {
                     id = r.ReplyId,
                     //parentReplyID = r.ParentReply,
                     body = r.Body,
                     authorFName = r.Author.FirstName,
                     authorLName = r.Author.LastName,
                     dateCreated = r.DateCreated,
                     endorsed = r.Endorsed,
                 }).ToList<ReplyDTO>();


        return replies;
    }

    [HttpPost("{postID}")]
    public void CreateReply(uint postID, [FromBody] ReplyCreateDTO rDTO)
    {
        Reply r = new()
        {
            PostId = postID,
            AuthorId = rDTO.authorID,
            Body = rDTO.body,
        };

        db.Replies.Add(r);
        db.SaveChanges();
    }
}
