function Specials() {
  return (
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
              <h3>
                Greek Salad <span>$12.99</span>
              </h3>

              <p>
                The famous greek salad of crispy lettuce, peppers, olives and feta cheese.
              </p>

              <p>Order a delivery 🚚</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src="/bruschetta.jpg" alt="Bruschetta" />

            <div className="card-content">
              <h3>
                Bruschetta <span>$5.99</span>
              </h3>

              <p>
                Grilled bread with garlic, olive oil and fresh toppings.
              </p>

              <p>Order a delivery 🚚</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src="/lemon-dessert.jpg" alt="Lemon Dessert" />

            <div className="card-content">
              <h3>
                Lemon Dessert <span>$5.00</span>
              </h3>

              <p>
                Grandma’s authentic lemon dessert recipe.
              </p>

              <p>Order a delivery 🚚</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Specials;