import React from "react";
import Cart from "./Cart";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={"/img/ICON.png"} alt="icono" width={60}/></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                                </li>
                                <li className="nav-item">

                                <NavLink className="nav-link" to={"/category/Proteina"}>Proteina</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/Creatina"}>Creatina</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/Preentreno"}>Pre-entreno</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/Shaker"}>Shaker</NavLink>
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