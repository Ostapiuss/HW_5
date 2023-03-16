import { Link } from "react-router-dom";
import './style.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__container">
        <li className="navigation__items">
          <Link
            to="/"
            className="navigation__link"
          >
            Home
          </Link>
        </li>
        <li className="navigation__items">
          <Link
            to="/movies"
            className="navigation__link"
          >
            Movie
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
