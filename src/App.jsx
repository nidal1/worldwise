import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
