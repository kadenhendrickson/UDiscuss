using Microsoft.AspNetCore.Mvc;
using System;
using UDiscuss.Models;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using UDiscuss.Controllers.DTOs;

namespace UDiscuss.Controllers;

[ApiController]
[Route("/api/user")]
public class UserController : ControllerBase
{
    protected mainContext db;

    public UserController() 
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


    [HttpGet]
    [Route("{userID}")]
    public UserDTO Get(uint userID)
    {
        UserDTO user = (from u in db.Users
                 where u.UserId == userID
                 select new UserDTO()
                 {
                     firstName = u.FirstName,
                     lastName = u.LastName,
                     email = u.Email,
                 }).First();

        var query = (from u in db.Users
                     where u.UserId == userID
                     join r in db.Rosters on u.UserId equals r.UserId
                     join c in db.Classes on r.ClassId equals c.ClassId
                     select new ClassDTO()
                     {
                         id = c.ClassId,
                         fullName = c.FullName,
                         shortName = c.ShortName,
                         semester = c.Semester,
                         year = c.Year,
                         role = r.Role
                     });

        user.classes = query.ToArray();
        return user;
    }
}
