import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ScanCrop from "./pages/ScanCrop";
import Weather from "./pages/Weather";
import Recommendations from "./pages/Recommendations";
import ScanHistory from "./pages/ScanHistory";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan" element={<ScanCrop />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/history" element={<ScanHistory />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;