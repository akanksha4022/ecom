import express from "express";
import axios from "axios";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    
    const existing = await Product.find();
    if (existing.length === 0) {
      console.log("🛒 Fetching products from Fake Store API...");
      const { data } = await axios.get("https://fakestoreapi.com/products?limit=10");

      
      const formatted = data.map((item) => ({
        name: item.title,
        price: Math.round(item.price * 80), 
        image: item.image,
      }));

      await Product.insertMany(formatted);
      console.log("✅ Products inserted into MongoDB");
    }

   
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("❌ Error fetching products:", err.message);
    res.status(500).json({ error: "Failed to load products" });
  }
});

export default router;
