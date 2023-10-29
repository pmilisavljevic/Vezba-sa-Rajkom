import { useAppContext } from "../../../hooks/useAppContext";

import PostMui from "../../../components/PostMui";

import { useGetPosts } from "../../../hooks/useGetPosts";
import CategoriesFilter from "./CategoriesFilter";
import { useState } from "react";
import { Category } from "../../../helpers/constantsAndEnums";

const categories = [
  { name: "ALL", id: 1 },
  { name: "general", id: 2 },
  { name: "science", id: 3 },
  { name: "world", id: 4 },
  { name: "music", id: 5 },
  { name: "nature", id: 6 },
  { name: "IT", id: 7 },
  { name: "history", id: 8 },
];

function AllPosts() {
  useGetPosts();
  const { loading } = useGetPosts();
  const {
    state: {
      postsSlice: { posts },
    },
  } = useAppContext();

  // Pagination settings
  const postsPerPage = 5; // Number of posts to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const [clickedCategory, setClickedCategory] = useState<Category>({
    name: "ALL",
    id: 1,
  });

  const handleButtonClick = (category: Category) => {
    setClickedCategory(category);
    setCurrentPage(1);
  };

  // Function to change the current page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const filteredPosts =
    clickedCategory.name === "ALL"
      ? posts
      : posts.filter((post) => post.category === clickedCategory.name);

  // Calculate the index range for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <CategoriesFilter
        clickedCategory={clickedCategory}
        categories={categories}
        handleButtonClick={handleButtonClick}
      />
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div className="all-posts">
          {currentPosts.map((post) => (
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

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({
          length: Math.ceil(filteredPosts.length / postsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default AllPosts;
