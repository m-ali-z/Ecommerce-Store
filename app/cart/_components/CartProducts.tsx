import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CartItemType } from "@/types/user";
import Image from "next/image";

const imageUrl =
  "https://media.gucci.com/style/White_Center_0_0_370x370/1699551155/724612_9C2ST_8746_001_095_0000_Light-Gucci-Savoy-large-duffle-bag.jpg";
const CartProducts = ({
  products,
  quantity,
}: {
  products: ProductType[];
  quantity?: number;
}) => {
  return (
    <div className="basis-2/3 ">
      <h1 className="uppercase">Your selections</h1>
      <hr className="border-t-1 border-gray-500 my-2" />
      <div className="flex justify-around">
        <div className="text-green-800 flex gap-2">
          <Image src={imageUrl} alt="Image" width={200} height={200} />
          <p>{products[0].name}</p>
        </div>
        <div className="flex gap-2">
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Qty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <p className="">AU $ 4,300</p>
      </div>
    </div>
  );
};

export default CartProducts;
