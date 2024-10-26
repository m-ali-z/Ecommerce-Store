import { Button } from "@/components/ui/button";
import React from "react";

const Summary = () => {
  return (
    <div className="border border-gray-300 h-auto p-4 basis-1/3 text-sm">
      <h1 className="">Order Summary</h1>
      <hr className="border-t-1 border-gray-500 my-2" />
      <div className="flex flex-col gap-4 ">
        <p>Subtotal</p>
        <p>Shipping</p>
      </div>
      <p className="my-8 font-bold">Total</p>
      <Button className="w-[80%] rounded-none m-auto flex justify-center uppercase tracking-wide">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
