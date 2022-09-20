import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Result from './routes/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" exact element={<h1>Hello</h1>} />
        <Route path="/search/:search" exact element={<Result/>} />
        <Route path="/" exact element={<Home/>} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
