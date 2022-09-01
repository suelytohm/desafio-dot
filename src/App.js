import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";


// Components

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />




          {/** 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
