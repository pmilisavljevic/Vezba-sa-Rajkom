import MainLayout from "../../layouts/MainLayout/MainLayout";

import Post from "../../components/Post";
import { useGetPosts } from "../../hooks/useGetPosts";
import { useAppContext } from "../../hooks/useAppContext";
function MyPosts() {
  useGetPosts();
  const { state } = useAppContext();

  return (
    <MainLayout>
      <div>
        {state.postsSlice.posts
          .filter((item) => item.userName === state.userSlice.user?.userName)
          .map((post) => (
            <Post
              key={post.id}
              title={post.title}
              userName={post.userName}
              body={post.body}
            />
          ))}
      </div>
    </MainLayout>
  );
}

export default MyPosts;
