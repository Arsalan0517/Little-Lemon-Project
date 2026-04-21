import heroImage from "./hero.jpg"; // restaurant image
import greekSalad from "./greek-salad.jpg";
import bruschetta from "./bruschetta.jpg";
import lemonDessert from "./lemon-dessert.jpg";

function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Reserve a Table</button>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Restaurant" />
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials">
        <div className="specials-header">
          <h2>This weeks Specials!</h2>
          <button>Online Menu</button>
        </div>

        <div className="cards">
          {/* Card 1 */}
          <div className="card">
            <img src={greekSalad} alt="Greek Salad" />
            <div className="card-content">
              <h3>Greek Salad <span>$12.99</span></h3>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.
              </p>
              <p>Order a delivery 🚚</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={bruschetta} alt="Bruschetta" />
            <div className="card-content">
              <h3>Bruschetta <span>$5.99</span></h3>
              <p>
                Our Bruschetta is made from grilled bread with garlic and olive oil.
              </p>
              <p>Order a delivery 🚚</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <div className="card-content">
              <h3>Lemon Dessert <span>$5.00</span></h3>
              <p>
                This comes straight from grandma’s recipe book, every ingredient is authentic.
              </p>
              <p>Order a delivery 🚚</p>
            </div>
          </div>
        </div>
      </section>
        {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Testimonials</h2>

        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>Rating ⭐⭐⭐⭐</p>
            <h4>Name</h4>
            <p>Review text</p>
          </div>

          <div className="testimonial-card">
            <p>Rating ⭐⭐⭐⭐⭐</p>
            <h4>Name</h4>
            <p>Review text</p>
          </div>

          <div className="testimonial-card">
            <p>Rating ⭐⭐⭐⭐</p>
            <h4>Name</h4>
            <p>Review text</p>
          </div>

          <div className="testimonial-card">
            <p>Rating ⭐⭐⭐⭐⭐</p>
            <h4>Name</h4>
            <p>Review text</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="about-images">
          <img src="./chef1.jpg" alt="Chef 1" />
          <img src="./chef2.jpg" alt="Chef 2" />
        </div>
      </section>
    </main>
  );
}

export default Main;