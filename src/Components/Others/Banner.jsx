import React from "react";


const Banner = () => {

    return(
        <div className=" container  my-5 " >
            <div className="row d-flex  justify-content-center banner">
                <div className="col-md-4 border-end border-2 flex-column align-items-center gap-3 text-center border-dark d-flex px-4 fs-5">
                    <img src="/img/truck.svg" alt="envios" width={32}/>
                    <b>ENVIOS A TODO EL PAÍS</b>
                </div>
                <div className="col-md-4 border-end border-2 flex-column align-items-center gap-3 text-center border-dark d-flex px-4 fs-5">
                    <img src="/img/cash.svg" alt="precios" width={32}/>
                    <b>PRECIOS ESPECIALES</b>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center gap-3  text-center   px-4 fs-5">
                    <img src="/img/lock.svg" alt="seguro" width={32}/>
                    <b>COMPRA SEGURA</b>
                </div>
            </div>
        </div>
    )

}


export default Banner;