"use server";
import { connectDb } from "@/lib/db";
import { Product } from "@/models/Product";
export const getAllProductsForAdmin = async (): Promise<ProductType[]> => {
  await connectDb();
  const products = await Product.find({});
  return products;
};

export const addProductToDb = async (formData: NewProductType) => {
  await connectDb();
  const { category, name, price, quantity, image } = formData;

  // console.log(typeof formData.image); // Should be 'object'
  // console.log(Array.isArray(formData.image)); // Should be true
  // const product = await Product.findOne({ name });
  // if (product) {
  //   product.quantity += quantity;
  //   await product.save();
  // }
  await Product.create({
    name,
    price,
    category,
    quantity,
    image,
  });
  return { message: "Product added successfully" };
};

export const deleteProductFromDb = async (_id: string) => {
  console.log(_id);
  await connectDb();
  await Product.deleteOne({ _id });
};
