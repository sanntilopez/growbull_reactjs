import React from "react";


const ItemDetail = ({item}) => {


    return(
        <div className="row my-5 text-center d-flex justify-content-center">
            <div className="col-md-4 ">
                <img src={item.img} alt={item.nombre} style={{width: "280px"}} className="mb-3 img-fluid"/>
                <h1>{`${item.nombre} ${item.marca}`}</h1>
                <p>{item.descripcion}</p>
                <p><b>$ {item.precio}</b></p>
            </div>
            
        </div>
    )
}

export default ItemDetail;