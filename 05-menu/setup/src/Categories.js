import React from 'react';

const Categories = (props) => {
  const {categories,filterItems} = props;
  return (
    <div className="btn-container">
      {
        categories.map((category,index) => {
          return (
          <button className="filter-btn" key={index} onClick={()=>filterItems(category)}>{category}</button>
          );
        })
      }
    </div>
  )
};

export default Categories;
