import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing";
import TeePhoto from "./pages/TeePhoto";
import TeeVideo from "./pages/TeeVideo";
import ValPKPhoto from "./pages/ValPKPhoto";
import ValPKVideo from "./pages/ValPKVideo";
import AshleyPhoto from "./pages/AshleyPhoto";
import AshleyVideo from "./pages/AshleyVideo";
import LilyPhoto from "./pages/LilyPhoto";
import LilyVideo from "./pages/LilyVideo";
import MaePhoto from "./pages/MaePhoto";
import MaeVideo from "./pages/MaeVideo";
import AlinaPhoto from "./pages/AlinaPhoto";
import AlinaVideo from "./pages/AlinaVideo";
import ClaudScottPhoto from "./pages/ClaudScottPhoto";
import ClaudScottVideo from "./pages/ClaudScottVideo";
import AleenaPhoto from "./pages/AleenaPhoto";
import AleenaVideo from "./pages/AleenaVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tee-photo" element={<TeePhoto />} />
        <Route path="/tee-video" element={<TeeVideo />} />
        <Route path="/val-pk-photo" element={<ValPKPhoto />} />
        <Route path="/val-pk-video" element={<ValPKVideo />} />
        <Route path="/ashley-photo" element={<AshleyPhoto />} />
        <Route path="/ashley-video" element={<AshleyVideo />} />
        <Route path="/lily-photo" element={<LilyPhoto />} />
        <Route path="/lily-video" element={<LilyVideo />} />
        <Route path="/mae-photo" element={<MaePhoto />} />
        <Route path="/mae-video" element={<MaeVideo />} />
        <Route path="/alina-photo" element={<AlinaPhoto />} />
        <Route path="/alina-video" element={<AlinaVideo />} />
        <Route path="/claud-scott-photo" element={<ClaudScottPhoto />} />
        <Route path="/claud-scott-video" element={<ClaudScottVideo />} />
        <Route path="/aleena-photo" element={<AleenaPhoto />} />
        <Route path="/aleena-video" element={<AleenaVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
