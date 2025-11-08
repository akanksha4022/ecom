import express from "express";
import CartItem from "../models/CartItem.js";
import Product from "../models/Product.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { productId, qty } = req.body;
  const existing = await CartItem.findOne({ productId });
  if (existing) {
    existing.qty += qty;
    await existing.save();
  } else {
    await CartItem.create({ productId, qty });
  }
  res.json(await CartItem.find());
});

router.delete("/:id", async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json(await CartItem.find());
});

router.get("/", async (req, res) => {
  const cartItems = await CartItem.find();
  const products = await Product.find();
  const detailed = cartItems.map((item) => {
    const prod = products.find((p) => p._id.toString() === item.productId);
    return { ...item._doc, name: prod?.name, price: prod?.price };
  });
  const total = detailed.reduce((sum, i) => sum + i.price * i.qty, 0);
  res.json({ cart: detailed, total });
});

export default router;
