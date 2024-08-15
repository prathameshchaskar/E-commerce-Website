import { useState } from "react";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Orders from "./customer/components/Orders/Orders";
import OrderDetails from "./customer/components/Orders/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./routers/CustomerRouters";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<CustomerRouters />}></Route>
        </Routes>
      </div>

      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Orders/> */}
        {/* <OrderDetails /> */}
      </div>
      
    </>
  );
}

export default App;
