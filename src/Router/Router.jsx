import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "../Pages/Profile";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;