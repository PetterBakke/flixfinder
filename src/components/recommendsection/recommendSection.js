import React from 'react';
// import './RecommendedSection.scss';
import MovieCard from '../moviecard/MovieCard';

const RecommendedSection = ({ title }) => {
  return (
    <section className="recommended-section">
      <h2 className="section-title">{title}</h2>
      <div className="card-carousel">
        {/* Example Movie Cards */}
        <MovieCard title="Movie 1" />
        <MovieCard title="Movie 2" />
        <MovieCard title="Movie 3" />
        {/* Add more MovieCard components as needed */}
      </div>
    </section>
  );
};

export default RecommendedSection;
