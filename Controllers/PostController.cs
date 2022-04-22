using Microsoft.AspNetCore.Mvc;
using System;
using UDiscuss.Models;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using UDiscuss.Controllers.DTOs;

namespace UDiscuss.Controllers;

[ApiController]
[Route("api/post")]
public class PostController : ControllerBase
{
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
    [NonAction]
    public void UseContext(mainContext mockContext)
    {
        db = mockContext;
    }

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
                     isAnonymous = p.Anonymous,
                     authorFName = !p.Anonymous ? p.Author.FirstName : null,
                     authorLName = !p.Anonymous ? p.Author.LastName : null,
                     relativeID = p.RelativeId,
                     isAnswered = p.Replies.Any(),
                     type = p.Type
                 }).ToList<PostDTO>();


        return posts;
    }

    [HttpPost("{classID}")]
    public void Post(uint classID, [FromBody]PostCreateDTO pDTO)
    {
        string[] allowAbleTypes = { "question", "note" };

        if (!allowAbleTypes.Contains(pDTO.type.ToLower()))
        {
            throw new BadHttpRequestException("Post type invalid.");
        }

        var catIDQuery = (from d in db.PostCategories
                      where d.Name == pDTO.category && d.ClassId == classID
                      select d.CategoryId);

        if (!catIDQuery.Any())
        {
            throw new BadHttpRequestException("Specified category not found.");
        }

        uint catID = catIDQuery.First();

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
            RelativeId = nextRelativeID,
            Anonymous = pDTO.isAnonymous,
            DateCreated = DateTime.Now,
            Type = pDTO.type
        };

        db.Posts.Add(p);
        db.SaveChanges();
    }
}
