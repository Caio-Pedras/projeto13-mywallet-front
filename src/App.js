import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import MainPage from "./Pages/MainPage";
import OperationPage from "./Pages/OperationPage";
import EditPage from "./Pages/EditPage";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import UserContextProvider from "./userContext/UserContextProvider.js";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route
            path="/operations/:operationType"
            element={<OperationPage />}
          />
          <Route
            path="/edit/:operationType/:operationID"
            element={<EditPage />}
          />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
