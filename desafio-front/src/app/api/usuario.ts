import apiInstance from "./apiInstance"

interface UserUpdateParams {

}

export const AtualizarUsuario = async (id: number, usuario: UserUpdateParams) => {
  return apiInstance
    .put(`/user/${id}`, usuario)
    .then(res => res.data);
}