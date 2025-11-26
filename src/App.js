import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import { HomePage } from "./Pages/HomePage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import { ProductDetailPage } from "./Pages/ProductDetailPage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Newsletter } from "./Components/Footer/Newsletter.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { CartPage } from "./Pages/CartPage.jsx";

function Layout() {
  const location = useLocation();

  // Pages where Newsletter should be hidden
  const hideNewsletterRoutes = ["/productsdetail", "/cart"];

  const shouldHideNewsletter = hideNewsletterRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/productsdetail" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      {/* Newsletter hidden on product detail + cart */}
      {!shouldHideNewsletter && <Newsletter />}

      {/* Footer always visible */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
