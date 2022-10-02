import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

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

  useEffect(() => {
    if (data) {
      setCategories(data.categories);
    }
  }, [data]);
  return <div>Home.component</div>;
};

export default Home;
