import React from "react";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import ProductPage from "./components/Pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductInfo from "./components/Pages/ProductInfo";
import { RecoilRoot } from "recoil";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { AuthProvider } from "./context/AuthProvider";
import Admin from "./components/Pages/Admin";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Pages/Unauthorized";


function App() {
  return (
    <div>
      <RecoilRoot>
        <AuthProvider>
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/products/:id" element={<ProductInfo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/account" element={<Account />} /> */}
                <Route path="/unauthorized" element={<Unauthorized />} />

              {/* protected */}
              <Route element={<RequireAuth allowedRoles={["admin"]} />}>
                <Route path="/admin" element={<Admin />} />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
