import './App.css'

import Hero from './components/Hero'
import Sales from './pages/Sales'
import Cart from './pages/Cart'

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {

    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ]);

    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Routes>

      <Route
        path="/"
        element={<Hero />}
      />

      <Route
        path="/explore"
        element={
          <Sales addToCart={addToCart} />
        }
      />

      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
          />
        }
      />

    </Routes>
  )
}

export default App