import React, { useState } from "react";
import ItemDetail from "../Detail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import Loading from "../Others/Loading";
import OtherProducts from "../Detail/OtherProducts";
import Banner from "../Others/Banner";


const ItemDetailContainer = () => {


    const [item, setItem] = useState({});
    const {id} = useParams()
    const [loading, setLoading] = useState(true)

    // Se recibe el item solicitado
    useEffect(() => {
        const db = getFirestore()
        const item = doc(db,"items", id)
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                
                setItem({id: id, ...snapShot.data()})
                setLoading(false)
            }
        })

    }, [id])

    return (
        <div >
            {
                
                <div className="container ">
                     {loading ? <Loading/> : <ItemDetail item={item} /> }  
                     
                </div>
            }
           <OtherProducts/>
           <Banner/>
        </div>
    )
}

export default ItemDetailContainer;