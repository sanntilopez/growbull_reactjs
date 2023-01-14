import React from "react";
import { Link, useParams } from "react-router-dom";


const Thankyou = () => {
    const {id} = useParams()

    return(
        <div className="container my-5">
            <div className="alert alert-success " role="alert">
                <h1>Felicitaciones, su compra fue realizada con exito!</h1>
                <p>Tu numero de orden es: {id}</p>
            </div>
            <div className="row d-flex justify-content-end my-3">
                <Link to={"/"} className=" col-md-2 text-end text-decoration-none" title="Continuar comprando">{"< Continuar comprando"}</Link>
            </div>
        </div>
    )


}


export default Thankyou;