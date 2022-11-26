import { instance } from "../utils/request";

export interface LoginForm {
  email: string,
  password: string
}

export async function login(data: LoginForm){
  return instance({
    url: '/login',
    method: 'POST',
    data
  })
}