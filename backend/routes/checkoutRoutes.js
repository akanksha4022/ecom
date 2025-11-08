import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const { cartItems, name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Missing customer details" });
  }

  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  const receipt = {
    customer: {
      name,
      email,
    },
    total,
    timestamp: new Date().toLocaleString(),
    message: " Mock checkout complete!",
  };

  res.json(receipt);
});

export default router;
