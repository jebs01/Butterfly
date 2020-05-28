using System.Threading.Tasks;
using CalculatorApp.API.Models;

namespace CalculatorApp.API.Data
{
    public interface ICalculateRepository
    {
        Task<int> Calculate(int Number1,int Number2,string Operator);
    }
}