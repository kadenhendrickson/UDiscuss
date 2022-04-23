using Microsoft.AspNetCore.Mvc;
using System;
using UDiscuss.Models;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using UDiscuss.Controllers.DTOs;

namespace UDiscuss.Controllers;

[ApiController]
[Route("api/class")]
public class ClassController : ControllerBase
{
    protected mainContext db;

    public ClassController() 
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


    [HttpPost]
    public void Post([FromBody]ClassCreateDTO cDTO)
    {
        Class c = new()
        {
            Semester = cDTO.semester,
            FullName = cDTO.fullName,
            ShortName = cDTO.shortName
        };

        db.Classes.Add(c);
        db.SaveChanges();
    }

    [HttpPost("categories/{classID}")]
    public void CreateCategories(uint classID, [FromBody] IEnumerable<string> categories)
    {

        List <PostCategory> cats = new();

        foreach(string catName in categories)
        {
            cats.Add(new PostCategory()
            {
                Name = catName,
                ClassId = classID,
            });
        }

        db.PostCategories.AddRange(cats);
        db.SaveChanges();
    }

    [HttpGet("categories/{classID}")]
    public IEnumerable<string> GetCategories(uint classID)
    {

        List<string> categories;
        categories = (from p in db.PostCategories
                 where p.ClassId == classID
                 select p.Name).ToList<string>();

        return categories;
    }
}
