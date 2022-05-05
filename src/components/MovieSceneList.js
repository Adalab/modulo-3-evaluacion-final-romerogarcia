import MovieSceneItem from './MovieSceneItem';
//lista de películas
function MovieSceneList(props) {
  //tranformar datos del array en un li
  const listElements = props.movieList.map((movieList) => {
    return (
      <li className="list__li">
        <MovieSceneItem movieList={movieList} />
      </li>
    );
  });
  return (
    <>
      <section className="container_list">
        <ul className="list">{listElements}</ul>
      </section>
    </>
  );
}
export default MovieSceneList;
