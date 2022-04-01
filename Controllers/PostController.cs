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
    /// This will get all of the posts currently in the database.
    /// </summary>
    /// <returns>IEnumerables of posts</returns>
    [HttpGet]
    public IEnumerable<Post> Get()
    {
        List<Post> posts = new(); 
        using (mainContext db = new mainContext())
        {
            var query = db.Posts;
            foreach(var post in query)
            {
                Post p = new();
                p.Title = post.Title;
                p.AuthorId = post.AuthorId;
                p.DateCreated = post.DateCreated;
                p.Body = post.Body;
                p.CategoryId = post.CategoryId;

                posts.Add(p);
            }
        }
        return posts;
    }

    [HttpPost]
    public bool Post(string text)
    {
        return false;
    }
}
