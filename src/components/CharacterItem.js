import { Link } from 'react-router-dom';

function CharacterItem(props) {
  return (
    <Link to={`/character/${props.characterList.id}`}>
      <img
        className="list__li__img"
        alt={props.characterList.image}
        title="Póster de la película"
        src={props.characterList.image}
      />
      <h2 className="list__li__title">{props.characterList.name} </h2>
      <p className="list__li__year">- {props.characterist.status} -</p>
    </Link>
  );
}
export default CharacterItem;
