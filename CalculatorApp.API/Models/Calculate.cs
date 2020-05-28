namespace CalculatorApp.API.Models
{
    public class Calculate
    {
            public int Id { get; set; }
        public int Number1 { get; set; }
        public int Number2 { get; set; }

        public string Operator { get; set; }

        public int Result { get; set; }
    }
}