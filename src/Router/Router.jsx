import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "../Pages/Profile";
import { Home } from "../Pages/Home";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;