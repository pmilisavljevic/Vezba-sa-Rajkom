import PostMui from "../../components/PostMui";

import { useGetPosts } from "../../hooks/useGetPosts";
import { useAppContext } from "../../hooks/useAppContext";

function MyPosts() {
  useGetPosts();
  const { loading } = useGetPosts();
  const { state } = useAppContext();

  return (
    <>
      {loading ? (
        // Display a loading indicator
        <div>Loading...</div>
      ) : (
        // Display your posts when the data is available
        <div>
          {state.postsSlice.posts
            .filter((item) => item.userName === state.userSlice.user?.userName)
            .map((post) => (
              <PostMui
                id={post.id}
                key={post.id}
                img={post.img}
                title={post.title}
                userName={post.userName}
                body={post.body}
                date={post.date}
                category={post.category}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default MyPosts;
