import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import React, {useContext, useState} from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Checkout = () => {
    const {cart, sumTotal, clear} = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState() 
    const [validated, setValidated] = useState(true)

    const generarOrden = () => {
        // Creación de la orden
        const fecha = new Date()
        const order = {
            date: `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}`,
            buyer: {name: nombre, email: email,telefono:telefono},
            items: cart.map(item => ({id:item.id, title:item.nombre, marca: item.marca, price: item.precio, quantity: item.quantity, price_total: item.precio * item.quantity})),
            total: sumTotal() 
        }

        
        if (nombre && email && telefono) { // Validación del formulario
        const db = getFirestore();
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then((snapShot) => {
            setValidated(true)
            setOrderId(snapShot.id)
            clear()
            
        }) 
        // Actualización del stock en la firebase
        cart.forEach(item => {
            const items = doc(db, "items", item.id)
            updateDoc(items, {stock: item.stock - item.quantity})
            
            
        })
    } else {
        setValidated(false)
    }
        
    }
    

    return(
        <div className="container ">
            <div className="row my-5 gap-3">
                <div className="col">
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} id="nombre" placeholder="Ingrese su nombre" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" onInput={(e) => {setEmail(e.target.value)}} className="form-control" placeholder="Ingrese su email" id="email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} placeholder="Ingrese su telefono" id="telefono"/>
                    </div>
                    <button type="button" onClick={generarOrden} title="Generar orden" className="btn btn-dark"><b>GENERAR ORDEN</b></button>
                    {validated ? "" : <span className="text-danger ms-3 align-middle"><img src="/img/exclamation.svg" alt="Incompleto" /> Completa todos los campos!</span>}
                </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id} className=" align-middle bg-white border">
                                    <td><img src={item.img} alt={item.nombre} width={64} /></td>
                                    <td>{item.nombre +" "+ item.marca}</td>
                                    <td className="text-center"><span>{item.quantity}</span></td>
                                    <td className="text-center">$ {item.precio * item.quantity}</td>
                                </tr>
                                
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center"><b>Total</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                                
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                {orderId ? <Navigate to={"/thankyou/" + orderId }/> : ""}
            </div>
        </div>
        
    )
}


export default Checkout;