import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DetailsMovie from "./DetailsMovie";
function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/DetailsMovie/:id" element={<DetailsMovie />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
