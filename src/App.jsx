import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart/Cart";
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />   
      </Routes>
    </BrowserRouter>
  );
}

export default App;