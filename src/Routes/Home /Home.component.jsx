import React, { Fragment, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import CategoryOverview from "../Category-Overview/Category_Overview.component";

const GETCATEGORIES = gql`
  query GetCategories {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            id
            value
            displayValue
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

const Home = () => {
  const [categories, setCategories] = useState([]);
  const { loading, error, data } = useQuery(GETCATEGORIES);
  console.log("cata", categories);

  useEffect(() => {
    if (data) {
      setCategories(data.categories);
    }
  }, [data]);
  return (
    <Fragment>
      {categories &&
        categories.map((category) => {
          return (
            <CategoryOverview
              key={category.name}
              category={category.product}
              name={category.name}
              error={error}
              loading={loading}
            />
          );
        })}
    </Fragment>
  );
};

export default Home;
