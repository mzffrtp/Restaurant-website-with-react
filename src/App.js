import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
