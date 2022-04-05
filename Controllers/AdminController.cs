using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UDiscuss.Models;

namespace UDiscuss.Controllers;

[ApiController]
[Route("[controller]")]
public class AdminController : ControllerBase
{

    protected mainContext db;


    public AdminController()
    {
        db = new mainContext();
    }

    //Deletes Reply and Posts table
    [HttpDelete]
    public void Clear()
    {
        var result = db.Replies.FromSqlRaw("TRUNCATE TABLE Reply").ToList();
        result = db.Replies.FromSqlRaw("ALTER TABLE Reply AUTO_INCREMENT = 0").ToList();
        db.SaveChanges();
        result = db.Replies.FromSqlRaw("TRUNCATE TABLE Post").ToList();
        result = db.Replies.FromSqlRaw("ALTER TABLE Post AUTO_INCREMENT = 0").ToList();
        db.SaveChanges();

    }
}
