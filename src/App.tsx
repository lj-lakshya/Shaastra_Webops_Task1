import './App.css'

import Hero from './components/Hero'
import Sales from './pages/Sales'
import Cart from './pages/Cart'
import Login from './pages/Login'

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState<any[]>([]);

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

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
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={
          isLoggedIn
            ? <Hero />
            : <Navigate to="/login" />
        }
      />

      <Route
        path="/explore"
        element={
          isLoggedIn
            ? <Sales addToCart={addToCart} />
            : <Navigate to="/login" />
        }
      />

      <Route
        path="/cart"
        element={
          isLoggedIn
            ? (
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
              />
            )
            : <Navigate to="/login" />
        }
      />

    </Routes>
  )
}

export default App