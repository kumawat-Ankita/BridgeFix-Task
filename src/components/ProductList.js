import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import "../styles/productList.css";

const ProductList = () => {
    const { products, loading } = useContext(ProductContext);

    return (
        <div className="product-list">
            {loading ? (
                <p>Loading Products....</p>
            ) : products.length > 0 ? (
                products.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default ProductList;
