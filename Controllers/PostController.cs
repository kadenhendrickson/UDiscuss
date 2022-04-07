using Microsoft.AspNetCore.Mvc;
using System;
using UDiscuss.Models;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace UDiscuss.Controllers;

[ApiController]
[Route("post")]
public class PostController : ControllerBase
{

    public class PostDTO
    {
        public uint ID { get; set; }
        public string title { get; set; } = null!;
        public string category { get; set; } = null!;
        public DateTime dateCreated { get; set; }
        public string body { get; set; } = null!;
        public string authorFName { get; set; } = null!;
        public string authorLName { get; set; } = null!;
        public uint relativeID { get; set; }

    }


    protected mainContext db;


    public PostController() 
    { 
        db = new mainContext();
    }

    /// <summary>
    /// This method will allow us to use a mock database when running
    /// our API tests.
    /// </summary>
    /// <param name="mockContext">The mock database context.</param>
    public void UseContext(mainContext mockContext)
    {
        db = mockContext;
    }


    ///// <summary>
    ///// This will return a post with the matching id or null if the post
    ///// cannot be found.
    ///// </summary>
    ///// <param name="postid">The id that refers to the post</param>
    ///// <returns>IEnumerables of a post that matches the id provided or null
    ///// if it doesn't exist.</returns>
    //[HttpGet]
    //public IEnumerable<Post> Get(int postid)
    //{
    //    return null;
    //}

    /// <summary>
    /// This will get all of the posts in a certain class
    /// 
    /// GET /post/{classID}
    /// </summary>
    /// <returns>IEnumerables of posts</returns>
    [HttpGet]
    [Route("{classID}")]
    public IEnumerable<PostDTO> Get(uint classID)
    {
        List<PostDTO> posts;
        posts = (from p in db.Posts
                 where p.ClassId == classID
                 select new PostDTO()
                 {
                     ID = p.PostId,
                     title = p.Title,
                     category = p.Category.Name,
                     dateCreated = p.DateCreated,
                     body = p.Body,
                     authorFName = p.Author.FirstName,
                     authorLName = p.Author.LastName,
                     relativeID = p.RelativeId,
                 }).ToList<PostDTO>();


        return posts;
    }

    [HttpPut("{classID}")]
    public void Post(uint classID, [FromBody]PostCreateDTO pDTO)
    {

        uint catID = (from d in db.PostCategories
                      where d.Name == pDTO.category && d.ClassId == classID
                      select d.CategoryId).First();

        uint nextRelativeID = 0;
        var query = (from po in db.Posts
                               where po.ClassId == classID
                               select po.RelativeId);
        if (query.Any())
        {
            nextRelativeID = query.Max() + 1;
        }

        Post p = new()
        {
            AuthorId = pDTO.authorID,
            Body = pDTO.body,
            Title = pDTO.title,
            ClassId = classID,
            CategoryId = catID,
            DateCreated = DateTime.Now,
            RelativeId = nextRelativeID
        };

        db.Posts.Add(p);
        db.SaveChanges();
    }

    public class PostCreateDTO
    {
        public string title { get; set; } = null!;
        public string category { get; set; } = null!;
        public string body { get; set; } = null!;
        public uint authorID { get; set; }
    }
}
