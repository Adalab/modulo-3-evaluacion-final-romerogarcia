import CharacterItem from './CharacterItem';
//lista de películas
function CharacterList(props) {
  //tranformar datos del array en un li
  const listElements = props.seriesList.map((characterList) => {
    return (
      <li className="list__li">
        <CharacterItem characterList={characterList} />
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
export default CharacterList;
