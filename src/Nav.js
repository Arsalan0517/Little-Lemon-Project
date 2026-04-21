import logo from "./public/Asset 16@4x.png"; // make sure the path is correct

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <img src={logo} alt="Little Lemon Logo" />

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;