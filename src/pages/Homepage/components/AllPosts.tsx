import { useEffect } from "react";

import { useAppContext } from "../../../hooks/useAppContext";
import { fetchPosts } from "../../../services/client";

import PostMui from "../../../components/PostMui";

function AllPosts() {
  const { dispatch } = useAppContext();

  const displayPosts = (posts) => {
    // OVDE ME JEBE ONO SA TIPOM AKCIJE IZ CONTEXTA
    dispatch({ type: "GET_ALL_POSTS", payload: posts });
  };
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();
        const posts = response.data;
        displayPosts(posts);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);
  // JESAM LI OVDE NESTO POGRESNO URADIO?

  const {
    state: {
      postsSlice: { posts },
    },
  } = useAppContext();
  // console.log(posts);

  return (
    <div className="all-posts">
      {posts.map((post) => (
        <PostMui
          id={post.id}
          key={post.id}
          img={post.img}
          title={post.title}
          userName={post.userName}
          body={post.body}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default AllPosts;
