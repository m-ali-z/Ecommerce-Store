import { getAllProductsForAdmin } from "../actions";
import ProductsList from "../_components/ProductsList";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProductsPage = async () => {
  const products = await getAllProductsForAdmin();

  return (
    <div className="mx-4">
      {products.length === 0 ? (
        <div className="min-h-screen font-bold text-xl flex flex-col gap-4 items-center justify-center">
          <p className="">There is nothing to display!</p>
          <Link href="/add-products">
            <Button>Add Products</Button>
          </Link>
        </div>
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  );
};

export default ProductsPage;
