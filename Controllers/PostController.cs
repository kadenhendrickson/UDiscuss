using Microsoft.AspNetCore.Mvc;
using UDiscuss.Models;

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

    // what does this meta tag do?
    [HttpGet]
    public IEnumerable<Post> Get()
    {
        return null;
    }
}
