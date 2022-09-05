import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
import Movies from './pages/Movies'
import { CartProvider } from './context/useCart'
import { Checkout } from './pages/Checkout'
import { PortalModals } from './PortalModals'
import { ModalProvider } from './context/useModal'

// Components

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <CartProvider>
          <BrowserRouter>
            <PortalModals />
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ModalProvider>
    </div>
  )
}

export default App
