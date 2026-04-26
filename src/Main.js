
function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
            <div className="hero-container">
                <div className="hero-text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    Fresh Mediterranean flavors served with a modern twist in the heart of Chicago.
                    Experience delicious food, warm hospitality, and unforgettable dining at Little Lemon.
                </p>
                <button>Reserve a Table</button>
                </div>

                <div className="hero-image">
                    <img src="/hero.jpg" alt="Restaurant" />
                </div>
            </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials">
        <div className="container">
            <div className="specials-header">
            <h2>This weeks Specials!</h2>
            <button>Online Menu</button>
            </div>

            <div className="cards">
            {/* Card 1 */}
            <div className="card">
                <img src="/greek-salad.jpg" alt="Greek Salad" />
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
                <img src="/bruschetta.jpg" alt="Bruschetta" />
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
                <img src="/lemon-dessert.jpg" alt="Lemon Dessert" />
                <div className="card-content">
                <h3>Lemon Dessert <span>$5.00</span></h3>
                <p>
                    This comes straight from grandma’s recipe book, every ingredient is authentic.
                </p>
                <p>Order a delivery 🚚</p>
                </div>
            </div>
            </div>
        </div>
      </section>
        {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
            <h2>Testimonials</h2>

            <div className="testimonial-cards">
            <div className="testimonial-card">
                <p>Rating ⭐⭐⭐⭐</p>
                <h4>Sarah Johnson</h4>
                <p>Amazing Mediterranean flavors and a cozy atmosphere. The food was fresh, delicious, and beautifully presented!</p>
            </div>

            <div className="testimonial-card">
                <p>Rating ⭐⭐⭐⭐⭐</p>
                <h4>Michael Rodriguez</h4>
                <p>Great service and incredible dishes. The bruschetta and lemon dessert were absolute highlights.</p>
            </div>

            <div className="testimonial-card">
                <p>Rating ⭐⭐⭐⭐</p>
                <h4>Emily Chen</h4>
                <p>Little Lemon quickly became my favorite restaurant in Chicago. Friendly staff and outstanding quality food.</p>
            </div>

            <div className="testimonial-card">
                <p>Rating ⭐⭐⭐⭐⭐</p>
                <h4>David Williams</h4>
                <p>Perfect place for family dinners. Warm ambiance, fast service, and authentic Mediterranean taste.</p>
            </div>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
            <div className="about-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
                Little Lemon is a family-owned Mediterranean restaurant located in Chicago, known for its fresh ingredients and vibrant flavors.
Combining traditional recipes with modern creativity, it offers a warm atmosphere and an unforgettable dining experience.
            </p>
            </div>

            <div className="about-images">
            <img src="/chef1.jpg" alt="Chef 1" />
            <img src="/chef2.jpg" alt="Chef 2" />
            </div>
        </div>
      </section>
    </main>
  );
}

export default Main;