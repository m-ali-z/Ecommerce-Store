import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, select: false },
  role: { type: String, default: "User" },
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  cart: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      }, // Product ID
      quantity: { type: Number, required: true, min: 1 }, // Quantity of the product
    },
  ],
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
