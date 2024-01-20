import Carttwo from './Cart - 2/Carttwo';
import Cartthere from './Cart - 3/Cartthere';
import Cart from './Cart/Cart';
import Menu from './Menu/Menu';
import Posts from './Posts/Posts';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/carttwo" element={<Carttwo />} />
        <Route path="/cartthere" element={<Cartthere />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
