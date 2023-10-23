import { useParams } from "react-router-dom";
// import { useEffect } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import PostComponent from "./components/PostComponent";

export const PostPage = () => {
  const {
    state: {
      postsSlice: { posts },
    },
  } = useAppContext();
  // console.log(posts);
  const { id } = useParams();
  // KAKO DA NA SILU STAVIM ID DA BUDE STRING, BEZ UNDEFINED?
  console.log(id);

  const foundPost = posts.find((post) => post.id === Number(id));
  // console.log(foundPost);

  return (
    <MainLayout>
      <PostComponent
        userName={foundPost.userName}
        date={foundPost.date}
        title={foundPost.title}
        body={foundPost.body}
      />
    </MainLayout>
  );
};
