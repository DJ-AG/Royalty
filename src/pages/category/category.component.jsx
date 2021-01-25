import React from "react";

import styled from 'styled-components'

import CollectionItem from "../../components/collection-item/collection-item.componen";

import "./category.style.scss";

const CategoryPage = ({ match }) => {
    console.log('match',match)
  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

export default CategoryPage;
