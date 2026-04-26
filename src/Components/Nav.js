import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav-container container">
        <img src="/ll_logo.png" alt="Little Lemon Logo" />

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;