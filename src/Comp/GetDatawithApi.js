import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
const GetDatawithApi = () => {
  const url = 'https://fakestoreapi.com/products';
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filtered2, setFiltered2] = useState([]);
  const [activeGenre, setActiveGenre] = useState();
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies);
    setFiltered(movies);
    setFiltered2(movies);
  };
  return (
    <div className="App">
      <h1>Movies</h1>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        filtered2={filtered2}
      />
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default GetDatawithApi;
