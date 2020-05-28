using System.Threading.Tasks;
using CalculatorApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CalculatorApp.API.Data
{
    public class CalculateRepository : ICalculateRepository
    {
        private readonly DataContext _context;
        public CalculateRepository(DataContext context)
        {
            _context = context;
        }
/*
        enum Operation {
            Addition = "Add",
            Subtraction = "Subtract",
            Multiplication = "Multiply",
            Division = "Divide"
}

        public void Add<T>(T entity) where T : class
        {
            //Calculate.Number1 = 6;

            _context.Add(entity);
        } */

     
     public async Task<int> Calculate(int Number1, int Number2, string Operator)
        {
           
               int result = 0;
               switch(Operator) 
                {
                    case "Add":
                        result      =  Number1 + Number2;
                        break;
                    case "Subtract":
                        result      =  Number1 - Number2;
                        break;
                    case "Multiply":
                        result      =  Number1 * Number2;
                        break;
                    case "Divide":
                        result      =  Number1 / Number2;
                        break;
                    default:
                        // code block
                        break;
                }
                
               // this.Add(Calculate.Number1);
              // await _context.SaveChangesAsync();

               return result;
        }
    }
}