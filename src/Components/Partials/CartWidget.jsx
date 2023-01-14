import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
    const {cartNumber} = useContext(CartContext)


    

    return (
        
            <Link to={"/cart"} title="Carrito">
                <button type="button" className="btn btn-dark position-relative">
                <img src="/img/cart.svg" alt="carrito"/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{cartNumber()}</span>
                </button>
            </Link>
    )
}


export default CartWidget;