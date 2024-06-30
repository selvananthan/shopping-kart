import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Header />
      <ProductList addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
      <Footer />
    </div>
  );
}

export default App;
