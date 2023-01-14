import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-6">
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to={"/"}><img src={"/img/ICON.png"} alt="icono" width={60}/></Link>
                                <div className="d-flex gap-4">
                                <div className="col-md-2 d-flex align-items-center justify-content-end cartResponsive">
                                    <CartWidget/>
                                </div>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to={"/"}>HOME</NavLink>
                                        </li>
                                        <li className="nav-item">

                                            <NavLink className="nav-link" to={"/category/Proteina"}>PROTEINA</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"/category/Creatina"}>CREATINA</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"/category/Preentreno"}>PRE-ENTRENO</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"/category/Shaker"}>SHAKER</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                
                            
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-end cart">
                        <CartWidget/>
                    </div>
                    
                </div>

            </div>
    )
}


export default Navbar;