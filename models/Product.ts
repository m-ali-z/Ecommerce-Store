import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String, // Optional: You could also link to a separate 'Category' model
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Product =
  mongoose.models?.Product || mongoose.model("Product", productSchema);
