import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: String,
  qty: Number,
});

export default mongoose.model("CartItem", cartItemSchema);
