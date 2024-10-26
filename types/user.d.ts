import * as z from "zod";
import {
  productSchema,
  registerSchema,
  signInSchema,
} from "@/lib/ValidationSchemas";
import { Types } from "mongoose";

type RegisterFormValues = z.infer<typeof registerSchema>;
type SignInFormValues = z.infer<typeof signInSchema>;
type AddProductValues = z.infer<typeof productSchema>;

type UserType = {
  email: string;
  name: string;
  password: string;
  role: string;
  favourites: ProductType[];
  cart: CartItemType[];
};

type CartItemType = {
  item: Types.ObjectId;
  quantity: number;
};
