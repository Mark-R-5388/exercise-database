import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="container navbar-flex-container">
        <h3 className="navbar-logo">Exercise Database</h3>
        <ul className="navbar-links">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/exercises">Exercises</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
