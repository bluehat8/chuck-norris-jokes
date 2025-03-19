import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ categories, onCategorySelect }) => {
  return (
    <div>
      <h3>Selecciona una categoría:</h3>
      <select onChange={(e) => onCategorySelect(e.target.value)}>
        <option value="">Todas</option>
        {categories.length > 0 ? (
          categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No hay categorías disponibles
          </option>
        )}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};

export default CategoryFilter;