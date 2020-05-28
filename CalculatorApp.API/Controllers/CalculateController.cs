using System.Threading.Tasks;
using CalculatorApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CalculatorApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculateController : ControllerBase
    {
        private readonly ICalculateRepository _repo;
        public CalculateController(ICalculateRepository repo)
        {
            _repo = repo;
        }
        
        [HttpPost("{Number1}/{Number2}/{Operator}")]
        public async Task<int> Calculate(int Number1,int Number2,string Operator)
        {
            
            var result = await _repo.Calculate(Number1,Number2,Operator);
            return result;
           
        }

    }
}