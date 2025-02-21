import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

const CartPage = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cart.length === 0 ? <p>Cart is Empty</p> : (
                cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                        <div>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartPage;
