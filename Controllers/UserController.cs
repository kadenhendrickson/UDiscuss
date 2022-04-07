using Microsoft.AspNetCore.Mvc;
using System;
using UDiscuss.Models;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace UDiscuss.Controllers;

[ApiController]
[Route("user")]
public class UserController : ControllerBase
{

    public class UserDTO
    {
        public string firstName { get; set; } = null!;
        public string? lastName { get; set; }
        public string? email { get; set; }

        public ClassDTO[]? classes { get; set; }

}

    public class ClassDTO
    {
        public uint id { get; set; }
        public string fullName { get; set; } = null!;
        public string shortName { get; set; } = null!;
        public string semester { get; set; } = null!;
        public short year { get; set; }

        public string role { get; set; } = null!;
    }


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
