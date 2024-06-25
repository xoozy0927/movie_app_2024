import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from './routes/About';
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App(){
  return (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About} />
      <Route path="/movie-detail" Component={Detail} />
    </Routes>
  </HashRouter>
  )
}

export default App;