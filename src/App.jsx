
import './App.css'
import axios from "axios"
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Navbar from './Navbar';
import ProductItem from '../ProductItem';
import ProductosCategoria from '../ProductosCategoria'; 

function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async() => {
    const res = await axios.get("https://fakestoreapi.com/products")
    setProductos(res.data);
};

  useEffect(() => {
    getProductos();
  },[]);

  console.log(productos);

  return (
   <>
   <h1>Store</h1>
   <Navbar />
   <Routes>
      <Route path ="/" element ={<Home />}/>
      <Route path ="/productos" element ={<ProductList productos={productos} />}/>

      <Route path='/productos/:id' element={<ProductItem productos={productos} />} />
      <Route path='*' element={<h2>404</h2>} />
      <Route path='/productos/:category' element={<ProductosCategoria productos={productos} />} />

   </Routes>

   </>
  );
  }
export default App
