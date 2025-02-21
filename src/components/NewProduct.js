import React, { useContext } from 'react'
import "../styles/newProduct.css";
import { ProductContext } from '../context/ProductContext';
export default function NewProduct({ isOpen, onClose }) {

    if (!isOpen) return null;

    return (
        <div>
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Add Product</h2>
                    <form>
                        <label>Product Name:</label>
                        <input type="text" placeholder="Enter product name" />

                        <label>Price:</label>
                        <input type="number" placeholder="Enter price" />

                        <label>Description:</label>
                        <textarea placeholder="Enter description"></textarea>

                        <button type="submit">Submit</button>
                        <button type="button" onClick={onClose}>Close</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


