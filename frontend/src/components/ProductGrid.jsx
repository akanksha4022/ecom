import { useEffect, useState } from "react";
import { api } from "../api";

export default function ProductGrid({ onAdd }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12 py-3">
      {products.map((p) => (
        <div
          key={p._id}
          className="bg-white border border-[#750961]  rounded-xl p-4 flex flex-col justify-between hover:shadow-xl transition"
        >
            <div>
                
            </div>
          <img
            src={p.image}
            alt={p.name}
            className="object-contain mb-3 rounded-md w-full h-90 bg-gray-100 p-2 align-middle"
          />

          <div className="flex flex-col items-start w-full">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-gray-600 mb-2">₹{p.price}</p>
            <button
              onClick={() => onAdd(p._id)}
              className="bg-[#750961] text-white px-4 py-2 rounded-md hover:bg-[#5a074d] transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
