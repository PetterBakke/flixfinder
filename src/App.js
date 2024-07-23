import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import RecommendedSection from './components/recommendsection/recommendSection';

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
