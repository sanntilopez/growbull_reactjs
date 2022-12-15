import React from 'react'; 
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './Components/Error404';

function App() {



  return (
    <div>
      <BrowserRouter>
        <Navbar />

          <Routes>
            <Route path={"/"} element={<ItemListContainer/>}/>
            <Route path={"/category/:id"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
            <Route path={"*"} element={<Error404/>}/>
          </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
