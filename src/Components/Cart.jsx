import React from "react";


const Cart = () => {
    return (
        <div className="col-md-6 d-flex align-items-center justify-content-end">
            <button type="button" className="btn btn-dark position-relative">
            <img src="/img/cart.svg" alt="carrito"/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">1</span>
            </button>
        </div>
    )
}


export default Cart;