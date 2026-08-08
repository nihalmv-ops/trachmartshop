import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
import Wishlist from "./pages/Wishlist";

function NotFound() {
  return (
    <div className="container-shell py-24 text-center">
      <p className="font-display font-bold text-4xl text-ink">404</p>
      <p className="text-ink-muted mt-2">This page doesn't exist.</p>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            
            

            <Route path="/login" element={<Login />} />
            <Route path="/profile/edit"element={<EditProfile />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
