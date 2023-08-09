import React, { useState } from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Shop from "../pages/Shop";
import BlogDetals from "../components/blog/BlogDetals";
import AboutUs from "../components/dropdDownPages/AboutUs";
import ShoppingCart from "../components/Cart/ShoppingCart";
import CheckOut from "../components/dropdDownPages/CheckOut";
import Contact from "../pages/Contact";
import Register from "../components/userprofile/Register";
import Login from "../components/userprofile/Login";
import MainProducts from "../components/products/MainProducts";
import Category from "../pages/Category";
import ShopDetails from "../components/dropdDownPages/ShopDetails";
import EmptyCarts from "../components/EmptyCart/EmptyCarts";
import Page404 from "../pages/404";
import WishList from "../pages/WishList";
import Payment from "../pages/Payment";
import SearchedProduct from "../pages/SearchedProduct";
import { GlobalContext } from "../context/GlobalContext";
import Protected from "../constant/Protected";
const Navigation = () => {
  const { isLogin} = GlobalContext();

  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/*" element={<Page404 />} />
        <Route path="/Home" element={<DashBoard />}/>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="products" element={<MainProducts />}/>
        <Route path="/empty-cart" element={<EmptyCarts />} />
        <Route path="/blog-details" element={<BlogDetals />} />
        <Route path="/shop-details" element={<ShopDetails />} />
        <Route path="/searchedProduct" element={<SearchedProduct />} />
        <Route path="/shopping-cart" element={<Protected isLogin={isLogin} ><ShoppingCart /></Protected> }/>
        <Route path="/checkout" element={<CheckOut />}/>
        <Route path="/payment" element={<Payment />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default Navigation;
