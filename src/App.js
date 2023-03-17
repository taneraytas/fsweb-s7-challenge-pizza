import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import OrderPage from "./components/OrderPage";
import Success from "./components/Success";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/siparis-sayfasi" element={<OrderPage />} />
        <Route path="/Success" element={<Success  />} />
      </Routes>
    </div>
  );
};
export default App;
