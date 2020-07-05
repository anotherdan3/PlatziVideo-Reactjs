import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import plusIcon from '../assets/images/plus-icon.png';
import playIcon from '../assets/images/play-icon.png';

const CarouselItem = ({ cover, year, duration, title }) => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src={cover}
      alt="Movie Cover"
    />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src={playIcon}
          alt="Play Icon"
        />
        <img
          className="carousel-item__details--img"
          src={plusIcon}
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {`${year} ${duration} Minutes`}
      </p>
    </div>
  </div>
);

export default CarouselItem;
