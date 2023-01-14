import React from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({item}) => {
const {addItem} = useContext(CartContext)


    // Función que añade al carrito
    const onAdd = (quantity) => {
            addItem(item, quantity)

    }
    

    return(
        <div className="row my-5 d-flex justify-content-center detailBox">
                <div style={{width: "420px"}} className=" align-middle p-5 w-50 border col-md-6  bg-white ">
                    <img src={item.img} alt={item.nombre} className="  " style={{width: "100%"}}/>
                </div>
                <div className="d-flex flex-column align-items-start col-md-6 bg-white w-50 p-5 border gap-2 justify-content-between">
                    <div>
                        <h1 className="fs-3 border-bottom pb-4 ">{`${item.nombre} ${item.marca}`}</h1>
                        <p className="mt-3">{item.descripcion}</p>
                        <p><b className={`fs-5 ${item.descuento > 0 ? 'text-danger text-decoration-line-through' : ""}`}>${item.precio}</b></p> 
                        {item.descuento > 0 ? <p><b className="fs-5">${item.precio - (item.precio* item.descuento)}</b></p> : ""}
                    </div>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
        </div>
        
    )   
}

export default ItemDetail;