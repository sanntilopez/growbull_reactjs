import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import {Link} from "react-router-dom"
import Banner from "../Others/Banner";

// Map para mostrar los items en el carrito
const CartTable = () => {
    const {cart, removeItem, addQuantity, minusQuantity} = useContext(CartContext)
    
    return (
        <>
                    {
                    cart.map(item => (
                        <tr key={item.id} className=" align-middle bg-white border border-2 " >
                            <td className="text-center"><img src={item.img} alt={item.nombre} width={56} /></td>
                            <td>{item.nombre +" "+ item.marca}</td>
                            <td className="text-center align-middle">
                                <div className="d-flex align-items-center justify-content-center">
                                    <button className="btn fs-4 text-muted" title="Reducir cantidad" onClick={() => {minusQuantity(item, 1)}}><b>-</b></button>
                                    <input className="text-center fs-5 " value={item.quantity} disabled style={{width: "30px"}}/>
                                    <button className="btn fs-4 text-muted" title="Aumentar cantidad" onClick={() => {addQuantity(item, 1)}} ><b>+</b></button>
                                </div>
                            </td>
                            <td className="text-center p-0"><b>$ {item.precio * item.quantity}</b></td>
                            <td className="text-end"><Link className="btn  p-2" title="Eliminar item" onClick={() => {removeItem(item.id)}}><img  src="/img/trash.svg" width={24} alt={item.nombre}/></Link></td>
                        </tr>
                    ))}
        </>
    )
}

// Carrito

const Cart = () => {
    const {cart, sumTotal, clear, discounts} = useContext(CartContext)

    // forEach para no permitir que la cantidad sea mayor al stock
    cart.forEach(item => {
        if(item.quantity > item.stock) {
            item.quantity = item.quantity - (item.quantity - item.stock)
        }
    });

    return (
        <div className="container my-5">
            <div className="row mb-4">
                <h1 className="col-md-12 fs-5">CARRITO DE COMPRAS</h1>
            </div>
            { cart.length === 0 ? <div className="row"><h2 className="col-md-12 text-muted">Tu carrito esta vacio.</h2></div> :
            <div className="row"> 
                <div className="col-md-8 d-flex flex-column align-items-end gap-3">
                    <Link className=" btn btn-secondary " title="Vaciar carrito"  onClick={clear}>Vaciar Carrito</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">NOMBRE</th>
                                <th scope="col" className="text-center">CANTIDAD</th>
                                <th scope="col" className="text-center">PRECIO</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartTable/>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                    <div className="d-flex flex-column border p-4  justify-content-between ">
                        <div className="d-flex flex-column gap-3">
                            <div><h3>RESUMEN DE COMPRA</h3></div>
                        
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="text-muted">Subotal:</td>
                                        <td className="text-muted">$ {sumTotal()}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-muted">Descuento:</td>
                                        <td className="text-muted">$ -{discounts()}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Total:</b></td>
                                        <td><b>$ {sumTotal() - discounts()}</b></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                           
                        </div>
                        
                        <Link to={"/checkout"} className="btn btn-dark" title="Finalizar compra"><b>FINALIZAR COMPRA</b></Link>
                 </div>
                </div>
            </div>
            }
            <div className="row d-flex justify-content-end mt-3">
                <Link to={"/"} className=" col-md-2 text-end text-decoration-none" title="Continuar comprando">{"< Continuar comprando"}</Link>
            </div>
            <Banner/>
        </div>
    )
}


export default Cart