import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing";
import TeePhoto from "./pages/TeePhoto";
import TeeVideo from "./pages/TeeVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tee-photo" element={<TeePhoto />} />
        <Route path="/tee-video" element={<TeeVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
