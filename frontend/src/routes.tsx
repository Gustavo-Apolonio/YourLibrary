import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import MainPage from "./pages/main";
import UserPage from "./pages/user";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/yourlibrary" element={<MainPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/edit" element={<UserPage edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
