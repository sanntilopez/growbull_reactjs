import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Toastify from "toastify-js"
import Swal from "sweetalert2"
import { Navigate } from "react-router-dom";



const ItemCount = ({stock, onAdd}) => {
    const [Counter, setCounter] = useState(1)
    const [stockItem, setStockItem] = useState(stock)
    const [goCart, setGoCart] = useState(false)

    // Función para sumar el contador
    const sumarCounter = () => {
        if (Counter < stockItem) {
            setCounter(Counter + 1)
        } else {
            Toastify({
                text: "No hay mas stock disponible.",
                duration: 3000, 
                gravity:"bottom",
                position:"right", 
                }).showToast();
        }
    }
    // Función para restar el contador
    const restarCounter = () => {
        if (Counter > 1) {
            setCounter(Counter - 1)
        }
    }
    // Función para agregar al carrito
    const addToCart = (q) => {
        onAdd(q)
        setCounter(0)
        setStockItem(stockItem - q)
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-primary me-2',
              cancelButton: 'btn btn-dark'
            },
            buttonsStyling: false
          })
        swalWithBootstrapButtons.fire({
            title: 'EL PRODUCTO FUE AGREGADO AL CARRITO',
            icon: 'success',
            confirmButtonText: 'IR AL CARRITO',
            cancelButtonText: 'SEGUIR COMPRANDO',
            showCancelButton: true,
            showCloseButton: true
          }).then((result) => {
            if (result.isConfirmed) {
                setGoCart(true)
            } 
          })
    }
    
    useEffect(() => {
        setStockItem(stock)
    }, [stock])

    return (
        <div className="row d-flex">
            <div className=" gap-4 mb-3 p-0">
                <div className="btn-group w-25" role="group" >
                    <button type="button"  className="btn btn-outline-dark" onClick={restarCounter}>-</button>
                    <input  disabled style={{width: "50px"}} className="text-center border border-dark" value={Counter}/>
                    <button type="button"  className="btn btn-outline-dark" onClick={sumarCounter}>+</button>
                </div>
            </div>
            <div className="row">
                 <button type="button" className="btn btn-dark col" onClick={() => {addToCart(Counter)}}><b>AGREGAR AL CARRITO</b></button>
            </div>
            {goCart ? <Navigate to={"/cart"}/>: "" }
        </div>
    )
}


export default ItemCount;