import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid bg-dark py-4">
            <div className="container d-flex justify-content-between">
                <img src="/img/ICONBLANCO.png" alt="icono footer" width={75} />
                <div className="d-flex gap-3 align-items-center">
                    <a href="https://www.instagram.com/"><img src="/img/instagram.svg" alt="instagram" width={30} /></a>
                    <a href="https://www.facebook.com/"><img src="/img/facebook.svg" alt="facebook" width={30} /></a>
                    <a href="https://www.youtube.com/"><img src="/img/youtube.svg" alt="youtube" width={30} /></a>
                </div>
            </div>

        </div>
    )
}


export default Footer;