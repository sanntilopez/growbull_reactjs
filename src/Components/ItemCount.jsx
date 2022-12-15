import React from "react";
import { useState } from "react";



const ItemCount = ({stockItems}) => {
    const [Counter, setCounter] = useState(1)
    const [stock, setStock] = useState(stockItems)

    const sumarCounter = () => {
        if (Counter < stock) {
            setCounter(Counter + 1)
        }
    }

    const restarCounter = () => {
        if (Counter > 1) {
            setCounter(Counter - 1)
        }
    }
    const onAdd = () => {
        setStock(stock - Counter)
        setCounter(0)
        
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className="d-flex flex-column col-md-2 gap-2 mb-3 align-items-center">
                <div className="btn-group" role="group" >
                    <button type="button" className="btn btn-outline-primary" onClick={restarCounter}>-</button>
                    <button className="px-4" style={{cursor: "default"}}>{Counter}</button>
                    <button type="button" className="btn btn-outline-primary" onClick={sumarCounter}>+</button>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}


export default ItemCount;