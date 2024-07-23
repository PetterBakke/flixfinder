import React from 'react';
// import './MovieCard.scss';

const MovieCard = ({ title }) => {
  return (
    <div className="card">
      <img src="path/to/movie-poster.jpg" alt={title} />
      <div className="card-content">
        <h3 className="title">{title}</h3>
        <p className="description">Short description of the movie or series.</p>
      </div>
    </div>
  );
};

export default MovieCard;
