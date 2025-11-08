import { useEffect, useState } from "react";
import { api } from "./api";
import ProductGrid from "./components/ProductGrid";
import CartView from "./components/CartView";
import CheckoutForm from "./components/CheckoutForm";
import ReceiptModal from "./components/ReceiptModal";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [receipt, setReceipt] = useState(null);
  const [popup, setPopup] = useState(""); // ✅ new state for popup message

  const loadCart = () => {
    api.get("/cart").then((res) => {
      setCart(res.data.cart);
      setTotal(res.data.total);
    });
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (id) => {
    await api.post("/cart", { productId: id, qty: 1 });
    loadCart();
    showPopup("Item added to cart!");
  };

  const removeFromCart = async (id) => {
    await api.delete(`/cart/${id}`);
    loadCart();
    showPopup("❌ Item removed from cart!");
  };

  // Popup function
  const showPopup = (message) => {
    setPopup(message);
    setTimeout(() => setPopup(""), 2000); 
  };

  return (
    <div className="min-h-screen bg-[#f7f1f6] relative">
      {/* Header */}
      <header className="bg-[#750961] py-4 mb-6 shadow-md">
        <h1 className="text-3xl font-bold text-center text-white tracking-wide">
          Vibe Commerce
        </h1>
      </header>

      {/* Product Grid */}
      <ProductGrid onAdd={addToCart} />

      {/* Cart + Checkout Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 px-6">
        <CartView cart={cart} total={total} onRemove={removeFromCart} />
        <CheckoutForm cart={cart} onReceipt={setReceipt} />
      </div>

      {/* Receipt Modal */}
      {receipt && (
        <ReceiptModal receipt={receipt} onClose={() => setReceipt(null)} />
      )}

      {/* Popup notification */}
      {popup && (
        <div
          className="fixed bottom-8 right-8 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg 
          transition-opacity duration-300 ease-in-out animate-fade-in"
        >
          {popup}
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-gray-600 py-6">
        © 2025 Vibe Commerce by Akanksha
      </footer>
    </div>
  );
}

export default App;
