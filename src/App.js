import React from "react";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import ProductPage from "./components/Pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductInfo from "./components/Pages/ProductInfo";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductInfo />}/>
        </Routes>
      </Router>
      </RecoilRoot>
    </div>
  );
};

export default App;
