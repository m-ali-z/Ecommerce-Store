import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ProductForm from "./ProductForm";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

interface EditProductDialogProps {
  _id?: string;
  title: string;
  name?: string;
  category?: string;
  price?: number;
  quantity?: number;
  images?: string[];
}

import React from "react";

const EditProductDialog = forwardRef<EditProductDialogProps>(
  function EditProductDialog(props, ref) {
    return (
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant={"default"}>Edit</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <ProductForm
                title="Edit Product"
                name={name}
                images={images}
                category={category}
                quantity={quantity}
                price={price}
              />
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Save</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>{" "}
      </div>
    );
  }
);

export default EditProductDialog;
