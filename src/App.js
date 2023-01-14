import React from 'react'; 
import Footer from './/Components/Partials/Footer';
import ItemListContainer from './Components/Containers/ItemListContainer';
import ItemDetailContainer from './Components/Containers/ItemDetailContainer';
import Navbar from './Components/Partials/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './Components/Others/Error404';
import CartContextProvider from './Components/Context/CartContext';
import Cart from './Components/Buy/Cart';
import Checkout from './Components/Buy/Checkout';
import Thankyou from './/Components/Buy/Thankyou';

function App() {



  return (
    <div>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path={"/"} element={<ItemListContainer/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"/category/:id"} element={<ItemListContainer/>}/>
                <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
                <Route path={"/checkout"} element={<Checkout/>}/>
                <Route path={"*"} element={<Error404/>}/>
                <Route path={"/thankyou/:id"} element={<Thankyou/>}/>
              </Routes>
              
            <Footer/>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
