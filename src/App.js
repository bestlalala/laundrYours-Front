import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Menubar from './pages/Menubar';
import Result from './pages/Result';
import Tips from './pages/Tips';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menubar/>} >
          <Route index element={<Home/>} />
          <Route path="/search/:search" element={<Result/>} />
          <Route path="/tips" element={<Tips />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
