import React from "react";
import productos from "../JSON/productos.json"
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams({})
    

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.tipo === id) : productos)
            }, 2000)
        }) 
        promesa.then((data) => {
            setItems(data)
        }) 
    }, [id])

    
    return (
        <div className="container py-5">
            <div className="row">

                <ItemList items={items} />

            </div>
        </div>
    )
}  



export default ItemListContainer;