"use server";
import { connectDb } from "@/lib/db";
import { Product } from "@/models/Product";
export const getAllProductsForAdmin = async (): Promise<ProductType[]> => {
  await connectDb();
  const products = await Product.find({});
  const plainProducts = products.map((product) => {
    const plainProduct = product.toObject();
    plainProduct._id = plainProduct._id.toString(); // Convert _id to a string
    return plainProduct;
  });

  return plainProducts;
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
  await connectDb();
  await Product.deleteOne({ _id });
};

export const updateProduct = async (formData: NewProductType, _id: string) => {
  await connectDb();

  const updatedProduct = await Product.findByIdAndUpdate(
    _id,
    { $set: formData }, // Updates the fields with new data
    { new: true, runValidators: true } // Option to return the updated document and validate schema
  );

  return { message: "Product added successfully" };
};
