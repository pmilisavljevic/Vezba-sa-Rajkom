export const LocalStorageKeys = {
  user: "user",
};

export type User = {
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  image: string;
  id: number;
};

export type UserLoginDTO = {
  email: string;
  password: string;
};

export const userActions = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
};
