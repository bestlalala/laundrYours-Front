import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Menubar from './routes/Menubar';
import Result from './routes/Result';
import Tips from './routes/Tips';

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
