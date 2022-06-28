import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginPage from "./Pages/LoginPage";
import SingUpPage from "./Pages/SingUpPage";
import MainPage from "./Pages/MainPage";
import OperationPage from "./Pages/OperationPage";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import UserContextProvider from "./userContext/UserContextProvider.js";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/singup" element={<SingUpPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route
            path="/operations/:operationType"
            element={<OperationPage />}
          />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
