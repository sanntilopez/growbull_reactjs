import React from "react";


const ItemListContainer = ({prod}) => {
    
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-12">
                <div class="alert alert-danger" role="alert">
                    {prod}
                </div>
                </div>
            </div>
        </div>
    )
}  



export default ItemListContainer;