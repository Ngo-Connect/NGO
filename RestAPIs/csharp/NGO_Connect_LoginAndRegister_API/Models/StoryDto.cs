namespace NGO_Connect_LoginAndRegister_API.Models
{
    public class StoryDto
    {
        public string StoryTitle { get; set; } = string.Empty;
        public string StoryDescription { get; set; } = string.Empty;
        public string Impact { get; set; } = string.Empty;
        public int? ItemId { get; set; } // Links to the Donation Type

        // Optional: If you want to save a custom image filename later
        public string? ImagePath { get; set; }
    }
}