function CharacterDetail(props) {
  return (
    <>
      <div className="container_details">
        <section className="detail">
          <img
            className="detail__img"
            alt={props.characterId.image}
            title="Imagen del personaje"
            src={props.characterId.image}
          />
          <div className="detail__container_text">
            <h2 className="detail__container_text__title">
              {props.characterId.name}
            </h2>

            <p className="detail__container_text__phrase">
              "{props.characterId.species}"
            </p>

            <p className="detail__container_text__phrase">
              "{props.characterId.status}"
            </p>

            <p className="detail__container_text__director">
              Director: {props.characterId.episode}
            </p>
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
    </>
  );
}
export default CharacterDetail;
