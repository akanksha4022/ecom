import { useState } from "react";
import { api } from "../api";

export default function CheckoutForm({ cart, onReceipt }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    // validation
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please fill in your name and email before checkout.");
      return;
    }

    
    setError("");
    
    const res = await api.post("/checkout", { 
      cartItems: cart,
      name: form.name,
      email: form.email
    });

    onReceipt(res.data);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-inner mx-6 mb-8 w-full md:w-[48%]">
      <h3 className="text-2xl font-bold mb-4">Checkout</h3>

      <div className="flex flex-col gap-3 mb-4">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#750961]"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          value={form.name}
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#750961]"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          value={form.email}
        />

        {/* 🔴 show validation error */}
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>

      <button
        onClick={handleCheckout}
        className="bg-[#750961] text-white px-6 py-2 rounded-md hover:bg-[#5a074d] transition"
      >
        Checkout
      </button>
    </div>
  );
}
