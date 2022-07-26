//detalles de la película

function MovieSceneDetail(props) {
  return (
    <div className="container">
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
              "{props.movieId.full_line}"
            </p>

            <p className="detail__container_text__director">
              Director: {props.movieId.director}
            </p>

            <a
              className="detail__container_text__audio"
              href={props.movieId.audio}
            >
              Click me for listen the "WOW"
            </a>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer__containerIcons">
          <ul className="footer__containerIcons__list">
            <li className="footer__containerIcons__list__li">
              <a
                className="footer__containerIcons__list__li__a"
                href="https://www.linkedin.com/in/noeliaromerogarcia/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="footer__containerIcons__list__li">
              <a
                className="footer__containerIcons__list__li__a"
                href="https://github.com/romerogarcia"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="footer__containerIcons__list__li">
              <a
                className="footer__containerIcons__list__li__a"
                href="mailto:noeliaromga@gmail.com"
                target="_blank"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__text">&copy; 2022 🐱 Noelia Romero García</p>
      </footer>
    </div>
  );
}
export default MovieSceneDetail;
