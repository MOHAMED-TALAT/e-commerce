
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './Component/Products/Products';
import Product from './Component/Product/Product';
import { useState, useEffect } from 'react';
import Cart from './Component/cart/Cart';
import './App.css';



function App() {
  const [cart, setCart] = useState([]);

  function AddToCard(product) {

    console.log(product);
    if (cart.find(pd => pd.id === product.id)) {

      return;
    }
    else {
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }

  }

  // set cart in local storage
  function getUpdatedCart() {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }
  
  useEffect(function () {
    getUpdatedCart()
  }, [])


  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='Product' element={<Product AddToCard={AddToCard} />} >
          <Route path=':id' element={<Product />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
