import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import Loading from "../Others/Loading";
import Banner from "../Others/Banner";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams({})
    const [loading, setLoading] = useState(true)

    // Se reciben los items
    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items" )
        
        
        const q = id ? query(itemsCollection, where("tipo", "==", id)) : itemsCollection;

        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
            setLoading(false)
        })
    }, [id])


    return (
        <div className="container my-5 p-0">
            <div className="row d-flex justify-content-center">

                { loading ? <Loading/> : <ItemList items={items} /> }

            </div>
            <Banner/>
        </div>
    )
}  



export default ItemListContainer;