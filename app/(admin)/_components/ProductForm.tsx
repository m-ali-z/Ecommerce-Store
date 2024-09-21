"use client";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/lib/ValidationSchemas";
import * as z from "zod";
import { addProductToDb } from "../actions";
import toast, { Toaster } from "react-hot-toast";

interface ProductFormProps {
  _id?: string;
  title: string;
  name?: string;
  category?: string;
  price?: number;
  quantity?: number;
  images?: string[];
}

const ProductForm = ({
  _id,
  title,
  name,
  category,
  price,
  quantity,
  images,
}: ProductFormProps) => {
  const [productImageUrls, setProductImageUrls] = useState<string[]>(
    images || []
  );
  const [imgError, setImgError] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: name || "",
      category: category || "",
      price: price || 0,
      quantity: quantity || 0,
    },
  });
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit = async () => {
    if (productImageUrls.length === 0) {
      setImgError(true);
      return;
    }
    const data = {
      name: form.getValues("name"),
      category: form.getValues("category"),
      image: productImageUrls,
      price: form.getValues("price"),
      quantity: form.getValues("quantity"),
    };

    const result = await addProductToDb(data);
    if (result) {
      toast.success("success", { duration: 2000 });
    }
    console.log(result);
  };

  const handleDeleteImage = (key: number) => {
    const updatedImages = productImageUrls.filter((_, i) => i !== key);
    setProductImageUrls(updatedImages);
  };
  const handleAddImage = () => {
    if (!currentImage) return;
    setProductImageUrls([...productImageUrls, currentImage]);
    setCurrentImage("");
  };

  return (
    <div className="w-[50%] m-auto my-20">
      <Toaster position="bottom-right" />

      <div className="h-full w-full bg-white p-8 rounded ">
        <h1 className="font-bold text-2xl text-center mb-8">{title}</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 text-xl"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Product Name"
                      {...field}
                      className="w-[50%]"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Kids">Kids</SelectItem>
                      <SelectItem value="Mens">Mens</SelectItem>
                      <SelectItem value="Women">Women</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Price"
                      {...field}
                      className="w-[20%]"
                      required
                      type="number"
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? parseInt(e.target.value, 10) : ""
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter quantity"
                      {...field}
                      className="w-[20%]"
                      required
                      type="number"
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? parseInt(e.target.value, 10) : ""
                        )
                      } // Convert input value to number
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter image url"
                  className="w-full"
                  value={currentImage}
                  onChange={(e) => {
                    setCurrentImage(e.target.value);
                    imgError ? setImgError(false) : "";
                  }}
                />

                <Button type="button" onClick={handleAddImage}>
                  Add Url
                </Button>
              </div>
              {imgError && (
                <FormMessage>Please add atleast one image!</FormMessage>
              )}
              {productImageUrls.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {productImageUrls.map((image, key) => (
                    <div
                      key={key}
                      className="flex flex-col items-center gap-2 relative"
                    >
                      <Trash2
                        color="red"
                        onClick={() => handleDeleteImage(key)}
                      />
                      <Image
                        key={key}
                        src={image}
                        width={100}
                        height={100}
                        className="w-[100px] h-[100px] object-cover"
                        alt="Product Image"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Button type="submit" className="w-full" size={"lg"}>
              {isSubmitting ? "Adding" : "Add Product"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProductForm;
