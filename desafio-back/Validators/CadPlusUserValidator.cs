using System.Text.RegularExpressions;

namespace desafio_back.Validators;

public class CadPlusUserValidator : UserValidator<User>
{
    public override async Task<IdentityResult> ValidateAsync(UserManager<User> userManager, User user)
    {
        var result = await base.ValidateAsync(userManager, user);

        if (!IsValidEmail(user.Email))
        {
            return IdentityResult.Failed(new IdentityError
            {
                Code = "InvalidEmail",
                Description = "O endereço de e-mail é inválido"
            });
        }

        return result;
    }

    private bool IsValidEmail(string email)
    {
        if (string.IsNullOrEmpty(email))
            return false;

        var emailRegex = new Regex(@"^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$");
        return emailRegex.IsMatch(email);
    }

    private bool IsValidPhoneNumber(string phoneNumber)
    {
        if (string.IsNullOrEmpty(phoneNumber))
            return false;

        var regex = new Regex(@"^(\d{2})(\d{2})(\d{4,5})(\d{4})$");
        return regex.IsMatch(phoneNumber);
    }

    private bool IsValidCPF(string cpf)
    {
        if (string.IsNullOrEmpty(cpf))
            return false;

        var regex = new Regex(@"^(\d{3})(\d{3})(\d{3})(\d{2})$");
        return regex.IsMatch(cpf);
    }
}
