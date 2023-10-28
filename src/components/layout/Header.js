import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import CartIcon from "../cart/CartIcon";
import About from "../routePages/About";
import Home from "../routePages/Home";

const Header = () => {
  return (
    <div>
      <Link to="/home">HOME</Link>
      <Link to="/store">STORE</Link>
      <Link to="/about">ABOUT</Link>
      <CartIcon />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Header;
