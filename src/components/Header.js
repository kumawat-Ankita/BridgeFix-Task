import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";
import NewProduct from "./NewProduct";
import "../styles/header.css";

const Header = () => {
    const { cart } = useContext(CartContext);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <header className="header">
                <Link to="/" className="logo">
                    <img src="e-commerce-logo1.png" alt="e-commerce-logo" className="e-commerce-logo" />
                </Link>
                <button className="btn" onClick={() => setModalOpen(true)}>Add Product</button>
                <button className="cart-btn" onClick={() => setCartOpen(true)}>
                    <img src="cart-logo.png" alt="logo" className="logo-img" /> {cart.reduce((total, item) => total + item.quantity, 0)}
                </button>
            </header>

            <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
            <NewProduct isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};

export default Header;
