import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Character from "./pages/Character";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/Comics" element={<Comics search={search} />} />
        <Route path="/Character/:id" element={<Character />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
