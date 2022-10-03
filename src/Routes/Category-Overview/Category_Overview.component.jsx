import React from "react";

const CategoryOverview = ({ category, name }) => {
  console.log("product", name);
  return (
    <div className="Category-Overview_container">
      <div>{name}</div>
    </div>
  );
};
export default CategoryOverview;
