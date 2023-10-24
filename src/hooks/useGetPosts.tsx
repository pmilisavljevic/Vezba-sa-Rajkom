import { useEffect } from "react";
import { fetchPosts } from "../services/client";
import { useAppContext } from "./useAppContext";
import {PostType} from "../state/context";

export function useGetPosts() {
  const { dispatch } = useAppContext();

  const displayPosts = (posts: PostType[]) => {
    dispatch({ type: "GET_ALL_POSTS", payload: posts });
  };
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();
        const posts = response.data;
        displayPosts(posts);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);
}
