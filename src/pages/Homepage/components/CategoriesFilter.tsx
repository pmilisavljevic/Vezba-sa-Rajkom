// import { useState } from "react";
import CategoryButton from "../../../components/CategoryButton";
import { Category } from "../../../helpers/constantsAndEnums";

type Props = {
  categories: Category[];
  clickedCategory: Category;
  handleButtonClick: (category: Category) => void;
};

function CategoriesFilter({
  categories,
  clickedCategory,
  handleButtonClick,
}: Props) {
  return (
    <div className="categories-filter">
      {categories.map((category: Category) => (
        <CategoryButton
          background={category.name}
          key={category.id}
          handleClicked={() => handleButtonClick(category)}
          active={clickedCategory === category}
        >
          #{category.name}
        </CategoryButton>
      ))}
    </div>
  );
}

export default CategoriesFilter;
