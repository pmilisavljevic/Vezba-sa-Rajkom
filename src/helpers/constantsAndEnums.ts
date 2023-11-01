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

export type Post = {
  img: string;
  title: string;
  body: string;
  userName: string;
  date: string;
  id: number;
  category?: string;
};

export const catColors: CatColors = {
  general: "#5fad56ff",
  history: "#f2c14eff",
  IT: "#f78154ff",
  nature: "#4d9078ff",
  music: "#b4436cff",
  world: "#de9151ff",
  science: "#aef78eff",
};

type CatColors = {
  [key: string]: string;
  general: string;
  history: string;
  IT: string;
  nature: string;
  music: string;
  world: string;
  science: string;
};

export type Category = {
  name: string;
  id: number;
};
