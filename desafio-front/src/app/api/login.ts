import apiInstance from "./apiInstance"

interface LoginParams {
  email: string;
  password: string;
}
export const FazerLogin = async (usuario: LoginParams) => {
  return apiInstance
    .post('/login', usuario)
    .then(res => res.data);
}

export const CadastrarUsuario = async (usuario: LoginParams) => {
  return apiInstance
    .post('/register', usuario)
    .then(res => res.data);
}