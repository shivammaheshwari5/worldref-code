import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLogin");
    if (storedLoginStatus === "true") {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="App">
      <Header onLogout={() => setIsLogin(false)} login={isLogin} />
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />}></Route>
        <Route
          path="/login"
          element={<Login onLogin={() => setIsLogin(true)} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
