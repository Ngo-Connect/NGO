using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NGO_Connect_LoginAndRegister_API.Models
{
    [Table("stories")]
    public class Story
    {
        [Key]
        [Column("story_id")]
        public int StoryId { get; set; }

        [Column("story_title")]
        public string StoryTitle { get; set; } = string.Empty;

        [Column("story_description")]
        public string StoryDescription { get; set; } = string.Empty;

        [Column("impact")]
        public string Impact { get; set; } = string.Empty;

        [Column("item_id")]
        public int? ItemId { get; set; }

        // We are ignoring image_path for now as per your request
    }
}