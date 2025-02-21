import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";
import "../styles/header.css";

const Header = () => {
    const { cart } = useContext(CartContext);
    const [isCartOpen, setCartOpen] = useState(false);

    return (
        <>
            <header className="header">
                <Link to="/" className="logo"><img src="e-commerce-logo.png" alt="e-commerce-logo1" className="e-commerce-logo" />
                </Link>
                <button className="cart-btn" onClick={() => setCartOpen(true)}>
                    <img src="cart-logo.png" alt="logo" className="logo-img" /> {cart.reduce((total, item) => total + item.quantity, 0)}
                </button>
            </header>
            <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
};

export default Header;
