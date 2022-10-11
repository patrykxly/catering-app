using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using catering_app.Data;
using catering_app.Models;

namespace catering_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodSetsController : ControllerBase
    {
        private readonly DataContext _context;

        public FoodSetsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/FoodSets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FoodSet>>> GetFoodSets()
        {
            return await _context.FoodSets.ToListAsync();
        }

        // GET: api/FoodSets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FoodSet>> GetFoodSet(Guid id)
        {
            var foodSet = await _context.FoodSets.FindAsync(id);

            if (foodSet == null)
            {
                return NotFound();
            }

            return foodSet;
        }

        // PUT: api/FoodSets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFoodSet(Guid id, FoodSet foodSet)
        {
            if (id != foodSet.Id)
            {
                return BadRequest();
            }

            _context.Entry(foodSet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FoodSetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FoodSets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FoodSet>> PostFoodSet(FoodSet foodSet)
        {
            _context.FoodSets.Add(foodSet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFoodSet", new { id = foodSet.Id }, foodSet);
        }

        // DELETE: api/FoodSets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFoodSet(Guid id)
        {
            var foodSet = await _context.FoodSets.FindAsync(id);
            if (foodSet == null)
            {
                return NotFound();
            }

            _context.FoodSets.Remove(foodSet);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FoodSetExists(Guid id)
        {
            return _context.FoodSets.Any(e => e.Id == id);
        }
    }
}
