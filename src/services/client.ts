import { axiosInstance } from "../helpers/axiosInstance";

export type createUserDto = {
  userName: string;
  firstName: string;
  lastName: string;
  // password: string;
  email: string;
};

type newPostTypes = {
  title: string;
  body: string;
  userName: string | undefined;
};

export const registerUser = async (payload: createUserDto) => {
  return axiosInstance.post("/users", payload);
};

export const fetchUsers = async () => {
  return axiosInstance.get("/users");
};

export const createNewPost = async (payload: newPostTypes) => {
  return axiosInstance.post("/posts", payload);
};

export const fetchPosts = async () => {
  return axiosInstance.get("/posts");
};
