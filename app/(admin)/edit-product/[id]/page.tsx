import { useParams } from "next/navigation";
import React from "react";
import ProductForm from "../../_components/ProductForm";
import { getProductById } from "@/lib/product";
const EditProduct = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);
  return (
    <div>
      <ProductForm
        _id={product._id}
        quantity={product.quantity}
        name={product.name}
        category={product.category}
        price={product.price}
        images={product.image}
      />
    </div>
  );
};

export default EditProduct;
