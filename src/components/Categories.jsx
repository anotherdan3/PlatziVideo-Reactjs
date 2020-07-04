import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <div>
    <h3 className="categories__title">{title}</h3>
    <div className="carousel">
      <div className="carousel__container">{children}</div>
    </div>
  </div>
);

export default Categories;
