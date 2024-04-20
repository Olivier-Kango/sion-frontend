import React from 'react';
import PropTypes from 'prop-types';

const CategoryComponent = ({ name, onClick }) => (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div className="category" onClick={onClick}>
    <h3>{name}</h3>
  </div>
);

CategoryComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryComponent;
