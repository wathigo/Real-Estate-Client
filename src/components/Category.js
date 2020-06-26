import React from 'react';
import PropTypes from 'prop-types';

const Categories = props => {
  const { categories, handleChange } = props;
  const categoryItems = categories === undefined ? [] : categories;
  const categoryNames = categoryItems.map(category => category.name);
  const allCategories = ['All', ...categoryNames];
  const options = allCategories.map(category => <option key={category}>{category}</option>);
  return (
    <div className="category-filter">
      <select id="category-selector-filter" onChange={handleChange}>
        {options}
      </select>
    </div>
  );
};

/* eslint-disable react/forbid-prop-types */
Categories.propTypes = {
  categories: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Categories;
