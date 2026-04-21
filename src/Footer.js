

function Footer() {
  return (
    <footer>
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <img src="/hero.jpg" alt="Little Lemon Logo" />
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Social Media Links</h3>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;