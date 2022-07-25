import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
const Filter = ({
  popular,
  setFiltered,
  activeGenre,
  setActiveGenre,
  filtered2,
}) => {
  useEffect(() => {
    const filtered = popular.filter((movie) => movie.category === activeGenre);
    setFiltered(filtered);
  }, [activeGenre]);
  const arrObjOne = [...new Set(filtered2.map((item) => item.category)), 'All'];
  return (
    <>
      {arrObjOne.map((postC, index) => {
        return (
          <Button
            className="mx-2"
            style={{ textTransform: 'capitalize' }}
            key={index}
            onClick={() => setActiveGenre(postC)}
          >
            {postC}
          </Button>
        );
      })}
    </>
  );
};
export default Filter;
