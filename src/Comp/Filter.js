import { useEffect } from 'react';
const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    const filtered = popular.filter((movie) => movie.category === activeGenre);
    setFiltered(filtered);
  }, [activeGenre]);
  return (
    <div className="filter-container">
      <button
        onClick={() => setActiveGenre('jewelery')}
        className={activeGenre === 0 ? 'active' : ''}
      >
        jewelery
      </button>
      <button
        onClick={() => setActiveGenre('electronics')}
        className={activeGenre === 35 ? 'active' : ''}
      >
        electronics
      </button>
      <button
        onClick={() => setActiveGenre("women's clothing")}
        className={activeGenre === 28 ? 'active' : ''}
      >
        women's clothing
      </button>
    </div>
  );
};
export default Filter;
