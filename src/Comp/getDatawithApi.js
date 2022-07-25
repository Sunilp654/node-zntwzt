import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';
import Filter from './Filter';
const App = () => {
  const url = 'https://fakestoreapi.com/products';
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className="App">
      <h1>Movies</h1>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="popular-movies">
        {filtered.map((product) => {
          return <Movie key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
export default App;
