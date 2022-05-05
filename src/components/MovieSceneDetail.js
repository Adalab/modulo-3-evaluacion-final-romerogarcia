//detalles de la película
function MovieSceneDetail(props) {
  return (
    <div className="container_details">
      <section className="detail">
        <img
          className="detail__img"
          alt={props.movieId.poster}
          title="Póster de la película"
          src={props.movieId.poster}
        />
        <div className="detail__container_text">
          <h2 className="detail__container_text__title">
            {props.movieId.movie}
          </h2>

          <p className="detail__container_text__phrase">
            {props.movieId.full_line}
          </p>

          <p className="detail__container_text__director">
            Director: {props.movieId.director}
          </p>

          <a
            className="detail__container_text__audio"
            href={props.movieId.audio}
          >
            Escuchar Audio
          </a>
        </div>
      </section>
    </div>
  );
}
export default MovieSceneDetail;
