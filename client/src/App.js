import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './view/Main';
import Detail from './components/Detail';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Main/>} />
            <Route path="/products/:id" element ={<Detail/>} />
            <Route path="/products/edit/:id" element ={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
