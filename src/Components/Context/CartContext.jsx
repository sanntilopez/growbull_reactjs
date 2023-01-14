// import { doc, getFirestore, updateDoc, getDoc, collection, getDocs } from "firebase/firestore";
import React, {createContext,useState} from "react";
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"


export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    
    
    const [cart, setCart] = useState([]);



    // Función para agregar items al carrito
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id)
            addQuantity(cart[pos], quantity)

        } else {
            setCart([...cart, {...item, quantity: quantity}])
        }

    }

        // Función para aumentar cantidad de item en el carrito
        const addQuantity = (prod, q) => {
                if (prod.quantity < prod.stock) {
                    setCart(
                        cart.map((item) => 
                            item.id === prod.id ? {...item, quantity: item.quantity += q} : {...item}
                    ))

                    Toastify({
                        text: "Se aumento la cantidad.",
                        duration: 3000, 
                        gravity:"bottom",
                        position:"right", 
                        }).showToast();

                } else {
                    Toastify({
                        text: "No hay mas stock disponible.",
                        duration: 3000, 
                        gravity:"bottom",
                        position:"right", 
                        }).showToast();
                }
                
        
        }
        // Función para reducir cantidad de item en el carrito
        const minusQuantity = (prod) => {
            if(prod.quantity > 1) {
            setCart(
                cart.map((item) => 
                    item.id === prod.id ? {...item, quantity: item.quantity -= 1} : {...item}
            ))

            Toastify({
                text: "Se reducio la cantidad.",
                duration: 3000, 
                gravity:"bottom",
                position:"right", 
                }).showToast();
        } 
        
        }

        // Función para eliminar item del carrito
        const removeItem = (id) => {
            const prod = cart.filter(x => x.id !== id)
            setCart(prod)

            Toastify({
                text: "Se elimino el item.",
                duration: 3000, 
                gravity:"bottom",
                position:"right", 
                }).showToast();
        }

        // Función para eliminar todos los items del carrito
        const clear = () => {
            setCart([])

            Toastify({
                text: "Se vacio el carrito",
                duration: 3000, 
                gravity:"bottom",
                position:"right", 
                }).showToast();
        }

        // Función que responde si se encuentra o no cierto elemento en el carrito
        const isInCart = (id) => {
            return cart.some(x => x.id === id)
        }
        
        // Función que devuelve el total de precio del carrito
        const sumTotal = () => {
            return cart.reduce((total, item) => total += item.precio * item.quantity, 0)
        }
        // Función que devuelve la suma de las cantidades de items en el carrito
        const cartNumber = () => {
            // forEach para que la cantidad no sea superior a los elementos en stock
            cart.forEach(item => {
                if(item.quantity > item.stock) {
                    item.quantity = item.quantity - (item.quantity - item.stock)
                }
            });
            return cart.reduce((total, item) => total += item.quantity, 0)
        }
        // Función que devuelve el total de descuentos a la compra
        const discounts = () => {
            return cart.reduce((total, item) => total += (item.precio * item.descuento) * item.quantity, 0)
            
        }




    return(
        <CartContext.Provider value={{addItem, removeItem, clear, cart, sumTotal, cartNumber, addQuantity, minusQuantity, discounts}}>
            {children}
        </CartContext.Provider>
    )
}



export default CartContextProvider;