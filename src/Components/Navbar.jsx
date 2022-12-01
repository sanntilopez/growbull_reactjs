import React from "react";
import Cart from "./Cart";


const Navbar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="https://www.google.com.ar/"><img src={"img/ICON.png"} alt="icono" width={60}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.google.com.ar/">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="https://www.google.com.ar/">Productos</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="https://www.google.com.ar/">Ofertas</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="https://www.google.com.ar/">Contacto</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <Cart/>
            </div>
        </div>
    )
}


export default Navbar;