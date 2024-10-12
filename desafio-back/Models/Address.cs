namespace desafio_back.Models;

public class Address
{
    public int Id { get; set; }
    public string Street { get; set; }
    public int Number { get; set; }
    public string Complement { get; set; }
    public string Neighborhood { get; set; }
    public string State { get; set; }
    public string City { get; set; }
}