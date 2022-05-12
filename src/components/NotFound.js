import '../styles/NotFound.scss';
import { Link } from 'react-router-dom';
const NotFoundElement = () => {
  return (
    <div className="containerNotFound">
      <h2 className="containerNotFound__title">A small problem has occurred</h2>
      <p>We can't find the detail of this film ☠️ </p>
      <Link className="containerNotFound__linkBack" to="/"></Link>
    </div>
  );
};

export default NotFoundElement;
