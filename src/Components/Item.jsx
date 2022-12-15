import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {



    return(
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark" >   
            <div className="card text-center " style={{ height:"420px", textDecoration:"none"}} >
                <div className="p-3 " style={{ height:"300px"}}>
                    <img src={item.img} className="card-img-top " alt={item.nombre} style={{ height:"100%", width: "auto"}}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title ">{item.nombre + " " + item.marca}</h5>
                    <p className="card-text">$ {item.precio}</p>
                </div>
            </div>
        </Link>
    )
}


export default Item;