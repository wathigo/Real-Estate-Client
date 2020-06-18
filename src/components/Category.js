import React from 'react';

const Categories = (props) => {
    const { categories } = props;
    const allCategories = ['All', ...categories];
    const options = allCategories.map(country => <option key={country}>{country}</option>);
    return (
            <div className="category-filter">
              <select id="category-selector-filter" >
                {options}
              </select>
            </div>
    );
};

export default Categories;