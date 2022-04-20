namespace UDiscuss.Controllers.DTOs
{
    public class PostDTO
    {
        public uint ID { get; set; }
        public string title { get; set; } = null!;
        public string category { get; set; } = null!;
        public DateTime dateCreated { get; set; }
        public string body { get; set; } = null!;
        public string authorFName { get; set; } = null!;
        public string authorLName { get; set; } = null!;
        public uint relativeID { get; set; }

        public bool isAnonymous { get; set; }

        public bool isAnswered { get; set; }
    }


    public class PostCreateDTO
    {
        public string title { get; set; } = null!;
        public string category { get; set; } = null!;
        public string body { get; set; } = null!;
        public uint authorID { get; set; }

        public bool isAnonymous { get; set; }

    }
}
