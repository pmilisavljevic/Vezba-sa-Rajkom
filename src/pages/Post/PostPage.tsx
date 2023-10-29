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

  const { id } = useParams();

  const foundPost = posts.find((post) => post.id === Number(id));

  return (
    <MainLayout>
      {foundPost && (
        <PostComponent
          userName={foundPost.userName}
          date={foundPost.date}
          title={foundPost.title}
          body={foundPost.body}
        />
      )}
    </MainLayout>
  );
};
