import React, { useState } from "react";
import ItemDetail from "./ItemDetail";
import items from "../JSON/productos.json"
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {


    const [item, setItem] = useState({});
    const {id} = useParams()

    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find((item) => item.id === parseInt(id)))
        })
    }) 
    promesa.then((data) => {
        setItem(data)
    }, [id])

    return (
        <div>
            {
                <div className="container">
                     <ItemDetail item={item} />  
                     <ItemCount stockItems={10}/>
                </div>


            }

        </div>
    )
}

export default ItemDetailContainer;