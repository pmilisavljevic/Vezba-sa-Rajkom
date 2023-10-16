import { useEffect, useState } from "react";
import { fetchPosts } from "../services/client";

export type Posts = {
  title: string;
  body: string;
  userName: string;
  id?: number;
};

export function useGetPosts() {
  // da li je bolje staviti null ili nesto trece kao default value?
  const [posts, setPosts] = useState<Posts[]>([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return { posts };
}
