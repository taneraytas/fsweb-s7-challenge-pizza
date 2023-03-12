import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import OrderPage from "./components/OrderPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/siparis-sayfasi" element={<OrderPage />} />
        {/* <Route path="/siparis-onay" element={<OkPage />} /> */}
      </Routes>
    </div>
  );
};
export default App;
