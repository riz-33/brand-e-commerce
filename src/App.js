import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import { HomePage } from "./Pages/HomePage.jsx";
import { ProductPage } from "./Pages/ProductPage.jsx";
import { ProductDetailPage } from "./Pages/ProductDetailPage.jsx";
import { CartPage } from "./Pages/CartPage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
