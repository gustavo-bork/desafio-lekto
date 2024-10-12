namespace desafio_back.Models;

public class User : IdentityUser<int>
{
    public string CPF { get; set; }
    public ICollection<Address> Addresses { get; set; }
}
