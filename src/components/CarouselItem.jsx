import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions/index';
import '../assets/styles/components/CarouselItem.scss';
import plusIcon from '../assets/images/plus-icon.png';
import playIcon from '../assets/images/play-icon.png';
import removeIcon from '../assets/images/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, year, duration, title, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
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

          {isList ? (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              alt="Remove Icon"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${duration} Minutes`}
        </p>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
