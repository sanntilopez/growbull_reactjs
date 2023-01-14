import { collection, getDocs, getFirestore} from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const OtherProducts = () => {
    const [items, setItems] = useState([]);

    // Función para recibir los items para recomendar
    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items" )


        getDocs(itemsCollection).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})).slice(1,7))
            
        })
    }, [])
    

    return(
        <div  className="container my-5">
            <div className="row my-3">
                <h4>Te puede interesar</h4>
            </div>
            <div className="row">
            {
                items.map(item => (
                    <div className="col-lg-2 mb-3" key={item.id}>
                        <Link to={"/item/" + item.id} className="text-decoration-none text-dark ">   
                        <div className="card prod p-2"  >
                            <div className="p-2 ">
                                <img src={item.img} className="card-img-top " alt={item.nombre} />
                            </div>
                            <div className="card-body">
                                <div style={{minHeight: "58px"}}>
                                    <p className="card-title" style={{fontSize: "14px"}}>{item.nombre + " " + item.marca}</p>
                                </div>
                                    <p className="card-text fs-5"><b>${item.precio}</b></p>
                            </div>
                        </div>
                    </Link>
                </div>
                ))
            }
            </div>    
        </div>
    
    )
}


export default OtherProducts;


