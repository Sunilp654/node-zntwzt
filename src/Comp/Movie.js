const Movie = ({ movie }) => {
  return (
    <div>
      <h5>{movie.title}</h5>
      <img src={movie.image} />
    </div>
  );
};
export default Movie;
