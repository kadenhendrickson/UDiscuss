namespace UDiscuss.Controllers.DTOs
{
    public class ClassDTO
    {
        public uint id { get; set; }
        public string fullName { get; set; } = null!;
        public string shortName { get; set; } = null!;
        public string semester { get; set; } = null!;
        public short year { get; set; }

        public string role { get; set; } = null!;
    }

    public class ClassCreateDTO
    {
        public string fullName { get; set; } = null!;
        public string shortName { get; set; } = null!;
        public string semester { get; set; } = null!;
    }
}
