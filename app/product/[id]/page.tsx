import { getProductById } from "@/lib/product";

import ProductPageLgScreen from "./_components/ProductPage";
const Product = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);
  return <ProductPageLgScreen product={product} />;
};

export default Product;
