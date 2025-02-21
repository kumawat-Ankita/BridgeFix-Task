import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/productList.css";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <p className="description">
                {showFullDescription ? product.description : `${product.description.slice(0, 60)}... `}
                <span className="toggle-description" onClick={toggleDescription}>
                    {showFullDescription ? "Show Less" : "Read More"}
                </span>
            </p>

            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;

