

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <img src="/ll_logo.png" alt="Little Lemon Logo" />

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