import './App.css';

import Nav from './Components/Nav';
import Footer from './Components/Footer';

import Homepage from './Pages/Homepage';
import BookingPage from './Pages/BookingPage';
import ConfirmedBooking from './Pages/ConfirmedBooking';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Order from './Pages/Order';
import Login from './Pages/Login';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* HEADER */}
      <header>
        <Nav />
      </header>

      {/* MAIN CONTENT */}
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;