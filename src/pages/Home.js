import React from "react";
import ProductList from "../components/ProductList";
import '../styles/global.css'

const Home = () => {
    return (
        <div>
            <h1 className="heading">Welcome to E-Shop</h1>
            <ProductList />
        </div>
    );
};

export default Home;
