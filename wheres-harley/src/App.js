import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing";
import TeePhoto from "./pages/TeePhoto";
import TeeVideo from "./pages/TeeVideo";
import ValPKPhoto from "./pages/ValPKPhoto";
import ValPKVideo from "./pages/ValPKVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tee-photo" element={<TeePhoto />} />
        <Route path="/tee-video" element={<TeeVideo />} />
        <Route path="/val-pk-photo" element={<ValPKPhoto />} />
        <Route path="/val-pk-video" element={<ValPKVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
