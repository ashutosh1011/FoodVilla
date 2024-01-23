import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7klc_4cnckngeiQbTRTX-9u87a-8sU5OLQ&usqp=CAU"
      alt="logo"
      className="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <nav className="navbar-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button className="button-login-logout">LogIn/logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
