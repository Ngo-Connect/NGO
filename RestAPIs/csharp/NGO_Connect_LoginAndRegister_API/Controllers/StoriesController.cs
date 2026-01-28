using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NGO_Connect_LoginAndRegister_API.Data;
using NGO_Connect_LoginAndRegister_API.Models;

namespace NGO_Connect_LoginAndRegister_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoriesController : ControllerBase
    {
        private readonly P01NgoConnectContext _context;

        public StoriesController(P01NgoConnectContext context)
        {
            _context = context;
        }

        // ==================================================
        // 1. GET: api/Stories 
        // USE THIS FOR: Displaying stories on the Homepage
        // ==================================================
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Story>>> GetStories()
        {
            return await _context.Stories.ToListAsync();
        }

        // ==================================================
        // 2. POST: api/Stories
        // USE THIS FOR: Adding stories from NGO Dashboard
        // ==================================================
        [HttpPost]
        public async Task<ActionResult> AddStory(StoryDto request)
        {
            // 1. Create the Story Object
            var newStory = new Story
            {
                StoryTitle = request.StoryTitle,
                StoryDescription = request.StoryDescription,
                Impact = request.Impact,
                ItemId = request.ItemId,
                // If you aren't uploading images yet, this can be null 
                // or you can pass a string if you have one.
                // ImagePath = request.ImagePath 
            };

            // 2. Add to Database
            _context.Stories.Add(newStory);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Story added successfully!", storyId = newStory.StoryId });
        }
    }
}