// import { useState, useEffect } from "react";
// import { fetchPosts } from "../../../services/client";

import Post from "../../../components/Post";
import { useGetPosts } from "../../../hooks/useGetPosts";

function AllPosts() {
  const { posts } = useGetPosts();
  // console.log(posts);

  return (
    <div>
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            userName={post.userName}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
