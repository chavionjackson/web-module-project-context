import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
//   let localCart = localStorage.getItem("cart");

  const addItem = (item) => {
    // add the given item to the cart
    const items = [...cart, item];
    setCart(items);
    // localStorage.setItem("cart", JSON.stringify(items));
  };

  const removeItem = (id) => {
    const newCart = [...cart.filter((items) => items.id !== id)];
    setCart(newCart);
    // let cartString = JSON.stringify(newCart);
    // localStorage.setItem("cart", cartString);
  };

//   useEffect(() => {
//     localCart = JSON.parse(localCart);
//     localCart && setCart(localCart);
//   }, []);

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
