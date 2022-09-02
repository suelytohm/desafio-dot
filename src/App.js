import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
import Movies from './pages/Movies'
import { CartProvider } from './context/useCart'
import { Checkout } from './pages/Checkout'

// Components

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
