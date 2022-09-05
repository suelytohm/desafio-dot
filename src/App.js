import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
import Movies from './pages/Movies'
import { CartProvider } from './context/useCart'
import { Checkout } from './pages/Checkout'
import { PortalModals } from './PortalModals'
import { ModalProvider } from './context/useModal'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Components

function App() {
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </div>
  )
}

export default App
