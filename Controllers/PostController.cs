using Microsoft.AspNetCore.Mvc;
using System;
using UDiscuss.Models;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace UDiscuss.Controllers;

[ApiController]
[Route("[controller]")]
public class PostController : ControllerBase
{

    public class PostDTO
    {
        public string title { get; set; } = null!;
        public string category { get; set; } = null!;
        public DateTime dateCreated { get; set; }
        public string body { get; set; } = null!;
        public string authorFName { get; set; } = null!;
        public string authorLName { get; set; } = null!;
        public uint relativeID { get; set; }

    }


    private readonly ILogger<PostController> _logger;


    public PostController(ILogger<PostController> logger)
    {
        _logger = logger;
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
    public IEnumerable<PostDTO> Get(uint classID)
    {
        List<PostDTO> posts;
        using (mainContext db = new mainContext())
        {
            posts = (from p in db.Posts
                    where p.ClassId == classID
                    select new PostDTO()
                    {
                        title = p.Title,
                        category = p.Category.Name,
                        dateCreated = p.DateCreated,
                        body = p.Body,
                        authorFName = p.Author.FirstName,
                        authorLName = p.Author.LastName,
                        relativeID = p.RelativeId,
                    }).ToList<PostDTO>(); 
            }

        return posts;
    }

    [HttpPost]
    public void Post(PostCreateDTO pDTO)
    {
        using mainContext db = new();

        uint catID = (from d in db.PostCategories
                         where d.Name == pDTO.category && d.ClassId == pDTO.classID
                         select d.CategoryId).First();

        uint nextRelativeID = (from po in db.Posts
                               where po.ClassId == pDTO.classID
                               select po.RelativeId).Max() + 1;
        Post p = new()
        {
            AuthorId = pDTO.authorID,
            Body = pDTO.body,
            Title = pDTO.title,
            ClassId = pDTO.classID,
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
        public uint classID { get; set; }
    }
}
