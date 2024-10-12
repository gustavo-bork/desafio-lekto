using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace desafio_back.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly UserManager<User> _userManager;

    public UserController(UserManager<User> userManager)
    {
        _userManager = userManager;
    }

    [HttpPost]
    public async Task<IActionResult> CreateUser([FromBody] User user)
    {
        try
        {
            var result = await _userManager.CreateAsync(user);

            if (result.Succeeded)
                return Ok(new { id = user.Id });

            return BadRequest(result.Errors);
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUser(int id)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(id.ToString());

            if (user is null)
                return NotFound("Usuário não encontrado");

            return Ok(user);
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser(int id, [FromBody] User user)
    {
        try
        {
            var existingUser = await _userManager.FindByIdAsync(id.ToString());

            if (existingUser is null)
                return NotFound("Usuário não encontrado");

            var result = await _userManager.UpdateAsync(user);
            if (result.Succeeded)
                return Ok("Usuário atualizado com sucesso");

            return BadRequest(result.Errors);
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(id.ToString());
            if (user is null)
                return NotFound("Usuário não encontrado");

            var result = await _userManager.DeleteAsync(user);
            if (result.Succeeded)
                return Ok("Usuário removido com sucesso");

            return BadRequest(result.Errors);
        }
        catch (Exception)
        {
            throw;
        }
    }
}
