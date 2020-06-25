import React from 'react';

const Categories = (props) => {
    const { categories, handleChange } = props;
    const category_items = categories === undefined ? [] : categories;
    const category_names = category_items.map(category => category.name);
    const allCategories = ['All', ...category_names];
    const options = allCategories.map(category => <option key={category}>{category}</option>);
    return (
            <div className="category-filter">
              <select id="category-selector-filter" onChange={ handleChange } >
                {options}
              </select>
            </div>
    );
};

export default Categories;