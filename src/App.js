import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import { CartProvider } from './context/useCart';


// Components

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
