import { axiosInstance } from "../helpers/axiosInstance"

export type createUserDto = {
    userName: string
      firstName: string
      lastName:string
      password:string
      email:string}


export const registerUser = async (payload:createUserDto)  => {

    return axiosInstance.post("/users",payload)
}  