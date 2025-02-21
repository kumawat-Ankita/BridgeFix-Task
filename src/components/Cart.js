import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import "../styles/cart.css";

const Cart = ({ isOpen, onClose }) => {
    const { cart } = useContext(CartContext);

    return (
        <div className={`cart-container ${isOpen ? "open" : ""}`}>
            <div className="cart-content">
                <button className="close-btn" onClick={onClose}>✖</button>
                <h2 className="text">Your Cart</h2>
                {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                        <div className="cart-total">
                            <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
