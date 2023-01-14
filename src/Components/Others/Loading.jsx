import React from "react";


const Loading = () => {

    return(
        <div className="row my-5 text-center d-flex justify-content-center">
        <div className="col-md-4 ">
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>

    )
}


export default Loading;