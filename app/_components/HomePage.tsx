import Hero from "./Hero";
import { Button } from "@/components/ui/button";
import ProductsHomePage from "./ProductsHomePage";
const HomePage = () => {
  return (
    <div className="p-4 h-full">
      <Hero />
      <div className="flex gap-4 mt-4">
        <Button className="rounded-none">New Arrivals</Button>
        <Button className="rounded-none bg-inherit text-black border border-black hover:text-white hover:bg-black">
          Best Sellers
        </Button>
      </div>
      <ProductsHomePage />
    </div>
  );
};

export default HomePage;
