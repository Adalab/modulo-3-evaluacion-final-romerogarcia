//detalles de la película
function MovieSceneDetail(props) {
  return (
    <section className="detail">
      <img
        className="detail__img"
        alt={props.movieId.poster}
        title="Póster de la película"
        src={props.movieId.poster}
      />
      <h2 className="detail__title">{props.movieId.movie} </h2>

      <p className="detail__phrase">{props.movieId.full_line} </p>

      <p className="detail__year">{props.movieId.director} </p>

      <a className="detail__link_audio" href={props.movieId.audio}>
        Escuchar Audio
      </a>
    </section>
  );
}
export default MovieSceneDetail;
