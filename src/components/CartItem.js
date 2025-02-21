import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

const CartItem = ({ item }) => {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    return (
        <div className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="cart-item-img" />
            <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div className="cart-item-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
    );
};

export default CartItem;
