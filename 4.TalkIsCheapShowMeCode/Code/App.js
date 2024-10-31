import React from "react";
import ReactDOM from "react-dom/client";

// Heading
//   -logo
//   -navItems
// Body
//   -search
//   -RestaurentComponents
// Footer
//   -copyright
//   -other links

const Heading = () => (
  <div className="heading">
    <div className="logo-container">
      <img
        className="logo"
        src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg"
        alt=""
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const BodyComponent = () => (
  <div className="body-container">
    <div className="search">Search</div>
    <div className="res-container">
      <h4 className="res-name">Kavach Food Court</h4>
    </div>
  </div>
);

const AppComponent = () => (
  <div className="app-container">
    <Heading />
    <BodyComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
