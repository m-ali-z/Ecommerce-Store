import { Manrope } from "next/font/google";
import Summary from "./_components/Summary";
import CartProducts from "./_components/CartProducts";
import { getCartProducts } from "@/lib/product";
import { auth } from "@/auth";
import { Product } from "@/models/Product";
const manrope = Manrope({ subsets: ["latin"] });
const Cart = async () => {
  const session = await auth();
  const cartProducts = await getCartProducts(session?.user.id);
  const productIds = cartProducts.cart; // Assuming user.cart is an array of product IDs
  const products = await Product.find({ _id: { $in: productIds } });

  return (
    <div className={`${manrope.className} py-8 px-[10%] flex gap-4 flex-row`}>
      <CartProducts products={products} />
      <Summary />
    </div>
  );
};

export default Cart;
