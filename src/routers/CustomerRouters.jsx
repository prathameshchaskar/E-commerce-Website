import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Orders from "../customer/components/Orders/Orders";
import OrderDetails from "../customer/components/Orders/OrderDetails";

const CustomerRouters = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>
          <Route path="/product/:productId" element={<ProductDetails />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/account/order" element={<Orders />}></Route>
          <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CustomerRouters;
