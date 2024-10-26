import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  }, // Reference to Product
  quantity: { type: Number, required: true, min: 1 }, // Quantity of the product in the cart
});

export const CartItem =
  mongoose.models?.CartItem || mongoose.model("CartItem", CartItemSchema);
