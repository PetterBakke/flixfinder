import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecommendedSection from './components/RecommendedSection';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <RecommendedSection title="Popular Movies" />
      <RecommendedSection title="New Releases" />
    </div>
  );
};

export default App;
