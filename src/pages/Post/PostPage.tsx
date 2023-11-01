import { useParams } from "react-router-dom";

import PostComponent from "./components/PostComponent";

import { useAppContext } from "../../hooks/useAppContext";

function PostPage() {
  const {
    state: {
      postsSlice: { posts },
    },
  } = useAppContext();
  console.log(posts);

  const { id } = useParams();

  const foundPost = posts.find((post) => post.id === Number(id));

  return (
    <>
      {foundPost && (
        <PostComponent
          userName={foundPost.userName}
          date={foundPost.date}
          title={foundPost.title}
          body={foundPost.body}
          id={foundPost.id}
        />
      )}
    </>
  );
}

export default PostPage;
