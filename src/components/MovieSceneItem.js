import { Link } from 'react-router-dom';

function MovieSceneItem(props) {
  return (
    <Link to={`/movie/${props.movieList.id}`}>
      <img
        className="list__li__img"
        alt={props.movieList.poster}
        title="Póster de la película"
        src={props.movieList.poster}
      />
      <h2 className="list__li__title">{props.movieList.movie} </h2>
      <p className="list__li__year">{props.movieList.year} </p>
      <p className="list__li__phrase">{props.movieList.full_line} </p>
    </Link>
  );
}
export default MovieSceneItem;
