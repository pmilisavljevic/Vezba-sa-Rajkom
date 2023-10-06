export const LocalStorageKeys = {
    user: "user"
}


export type User = {
    email: string;
    userName: string,
    firstName: string,
    lastName: string,
   };

 export  type UserLoginDTO = {
    email: string;
    password: string;
  }