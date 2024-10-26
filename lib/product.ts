"use server";
import { Product } from "@/models/Product";
import { connectDb } from "./db";
import { HydratedDocument } from "mongoose";
import { UserType } from "@/types/user";
import { User } from "@/models/User";
import { CartItem } from "@/models/Cart";

export const getProductById = async (id: any): Promise<ProductType> => {
  await connectDb();

  const product = await Product.findById({ _id: id });
  const plainProduct = product.toObject();
  plainProduct._id = plainProduct._id.toString(); // Convert _id to a string
  return plainProduct;
};

export const getAllProductsForUser = async (): Promise<ProductType[]> => {
  await connectDb();
  const products = await Product.find({});

  const plainProducts = products.map((product) => {
    const plainProduct = product.toObject();
    plainProduct._id = plainProduct._id.toString(); // Convert _id to a string
    return plainProduct;
  });

  return plainProducts;
};

export const addProductToFvrt = async (productId: any, userId: any) => {
  await connectDb();
  const user = (await User.findById(userId)) as HydratedDocument<UserType>;
  if (!user) {
    console.log("user not found");
    return;
  }
  if (!user.favourites.includes(productId)) {
    user.favourites.push(productId);
    await user.save();
  }
};

export const getFvrtProducts = async (userId: any) => {
  await connectDb();
  const user = await User.findById(userId);
  const plainUser = user.toObject();
  plainUser._id = plainUser._id.toString();
  return plainUser;
};

export const deleteFvrtProduct = async (productId: any, userId: any) => {
  await connectDb();
  const user = await User.findByIdAndUpdate(userId, {
    $pull: { favourites: productId },
  });
};

export const addProductToCart = async (
  productId: any,
  userId: any,
  quantity: number
) => {
  await connectDb();
  const user = (await User.findById(userId)) as HydratedDocument<UserType>;
  if (!user) {
    console.log("user not found");
    return;
  }

  if (!user.cart.includes(productId)) {
    user.cart.push(productId);
    await user.save();
  }
  console.log(user.cart);

  // if (existingCartItem) {
  //   // Update the quantity of the existing cart item
  //   await CartItem.findByIdAndUpdate(existingCartItem._id, {
  //     $set: { quantity: quantity },
  //   });
  // } else {
  //   // If the product is not in the cart, add it as a new cart item
  //   const newCartItem = new CartItem({
  //     product: productId,
  //     quantity: quantity,
  //   });
  //   await newCartItem.save();

  //   // Push the new cart item to the user's cart and save the user
  //   user.cart.push(newCartItem.id);
  //   await user.save();
  // }
};

export const getCartProducts = async (userId: any) => {
  const user = await User.findById(userId).populate({
    path: "cart.item", // Populate the 'item' field in each CartItem
    model: "Product", // Specify the Product model to use for population
  });
  console.log(user);
  return user;
};
