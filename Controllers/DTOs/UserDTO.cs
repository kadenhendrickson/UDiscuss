namespace UDiscuss.Controllers.DTOs
{
    public class UserDTO
    {
        public string firstName { get; set; } = null!;
        public string? lastName { get; set; }
        public string? email { get; set; }

        public ClassDTO[]? classes { get; set; }

    }
}
