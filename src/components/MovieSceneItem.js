import { Link } from 'react-router-dom';

function MovieSceneItem(props) {
  return (
    <Link to={`/movie/${props.movieList.id}`}>
      <img
        className="movie__img"
        alt={props.movieList.poster}
        title="Póster de la película"
        src={props.movieList.poster}
      />
      <h2 className="movie__title">{props.movieList.movie} </h2>
      <p className="movie__year">{props.movieList.year} </p>
      <p className="movie__phrase">{props.movieList.full_line} </p>
    </Link>
  );
}
export default MovieSceneItem;
