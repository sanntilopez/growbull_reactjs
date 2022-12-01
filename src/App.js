import React from 'react'; 
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';

function App() {

  // Item List Alert
  let productos = []
  let itemListAlert = ""
  if (productos.length === 0) {
    itemListAlert = "No se encontraron productos!";
  } else{
    itemListAlert = "Productos encontrados";
  }


  return (
    <div>
      <Navbar />
      <ItemListContainer prod={itemListAlert}/>
      <Footer/>
    </div>
  );
}

export default App;
