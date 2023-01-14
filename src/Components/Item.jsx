import React from "react";
import { Link } from "react-router-dom";


const Item = ({item}) => {


    return(
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark shadow">   
            <div className="card prod p-2"  >
                <div className="p-2 ">
                    <img src={item.img} className="card-img-top " alt={item.nombre} />
                    {item.descuento > 0 ? <span className="position-absolute p-2 shadow opacity-75 bg-success text-white rounded-circle " style={{right: "1rem"}}>{item.descuento* 100+ "% OFF"}</span> : ""}

                </div>
                <div className="card-body">
                    <div style={{minHeight: "58px"}}>
                        <p className="card-title" style={{fontSize: "18px"}}>{item.nombre + " " + item.marca}</p>
                    </div>
                        <p className="card-text fs-5"><b>${item.precio}</b></p>
                   
                    
                </div>
            </div>
        </Link>

    )
}


export default Item;