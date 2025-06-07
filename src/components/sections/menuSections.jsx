import { ArrowLeft, Utensils, Wine, Coffee, Baby, ChevronDown, ChevronUp } from "lucide-react";
import {useState} from "react";
import "../../styles/MenuSection.css";

const MenuSection = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);


  const mealPackages = [
    {
      type: "Bed & Breakfast",
      price: "KES 4,500",
      description: "Continental breakfast with Kenyan coffee/tea selection",
    },
    {
      type: "Half Board",
      price: "KES 7,500",
      description: "Breakfast and dinner included",
    },
    {
      type: "Full Board",
      price: "KES 9,500",
      description: "All meals included with complimentary evening tea",
    },
  ];

  const mainDishes = [
    {
      name: "Nyama Choma Platter",
      price: "KES 2,800",
      description: "Grilled goat meat served with kachumbari and ugali",
      category: "Signature",
    },
    {
      name: "Swahili Fish Curry",
      price: "KES 2,500",
      description: "Fresh catch in coconut curry sauce with pilau rice",
      category: "Seafood",
    },
    {
      name: "Mukimo Special",
      price: "KES 1,800",
      description: "Traditional Kenyan mashed potatoes with vegetables and meat stew",
      category: "Local",
    },
  ];

  const kidsMenu = [
    {
      name: "Mini Chapati Roll",
      price: "KES 800",
      description: "Soft chapati with minced meat and vegetables",
    },
    {
      name: "Fish Fingers & Chips",
      price: "KES 900",
      description: "Breaded fish strips with potato wedges",
    },
  ];

  const drinks = [
    {
      name: "Dawa Cocktail",
      price: "KES 850",
      description: "Traditional Kenyan honey-lime vodka mixture",
      category: "Signature Cocktails",
    },
    {
      name: "Kenyan Coffee Experience",
      price: "KES 450",
      description: "Premium AA Kenyan coffee with traditional preparation",
      category: "Hot Beverages",
    },
  ];

  const specialOffers = [
    {
      title: "Happy Hour",
      time: "17:00 - 19:00",
      description: "50% off on all local beers and house wines",
    },
    {
      title: "Sunday Brunch",
      time: "10:00 - 15:00",
      price: "KES 3,500",
      description: "All-you-can-eat buffet with live cooking stations",
    },
  ];

  return (
    <div className="menu-section">
      <header className="menu-header">
        <div className="header-content">
          <Utensils className="header-icon" />
          <div className="header-text">
            <h1>Food & Drink</h1>
            <p>Experience authentic Kenyan cuisine with a modern twist</p>
          </div>
        </div>
      </header>

      {!isMenuVisible ? (
        <button 
          className="preview-button"
          onClick={() => setIsMenuVisible(true)}
        >
          <span>Preview Our Exquisite Dining & Drinks Selection</span>
          <ChevronDown className="button-icon" />
        </button>
      ) : (
        <>
          <main className="menu-main">
            <section className="packages-section">
              <h2>Dining Packages</h2>
              <div className="packages-grid">
                {mealPackages.map((pkg, index) => (
                  <div key={index} className="package-card">
                    <h3>{pkg.type}</h3>
                    <p className="price">{pkg.price}</p>
                    <p className="description">{pkg.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="main-dishes-section">
              <h2>Signature Dishes</h2>
              <div className="dishes-grid">
                {mainDishes.map((dish, index) => (
                  <div key={index} className="dish-card">
                    <span className="category-tag">{dish.category}</span>
                    <h3>{dish.name}</h3>
                    <p className="description">{dish.description}</p>
                    <p className="price">{dish.price}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="kids-section">
              <h2><Baby className="section-icon" /> Kids Menu</h2>
              <div className="kids-grid">
                {kidsMenu.map((item, index) => (
                  <div key={index} className="kids-card">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>
                    <p className="price">{item.price}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="drinks-section">
              <h2><Wine className="section-icon" /> Drinks & Cocktails</h2>
              <div className="drinks-grid">
                {drinks.map((drink, index) => (
                  <div key={index} className="drink-card">
                    <span className="category-tag">{drink.category}</span>
                    <h3>{drink.name}</h3>
                    <p className="description">{drink.description}</p>
                    <p className="price">{drink.price}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="special-offers">
              <h2>Special Offers</h2>
              <div className="offers-grid">
                {specialOffers.map((offer, index) => (
                  <div key={index} className="offer-card">
                    <h3>{offer.title}</h3>
                    <p className="time">{offer.time}</p>
                    {offer.price && <p className="price">{offer.price}</p>}
                    <p className="description">{offer.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
          <button 
            className="hide-button"
            onClick={() => setIsMenuVisible(false)}
          >
            <span>Hide Menu</span>
            <ChevronUp className="button-icon" />
          </button>
        </>
      )}


      
    </div>
  );
};

export default MenuSection;