import * as z from "zod";
import {
  productSchema,
  registerSchema,
  signInSchema,
} from "@/lib/ValidationSchemas";

type RegisterFormValues = z.infer<typeof registerSchema>;
type SignInFormValues = z.infer<typeof signInSchema>;
type AddProductValues = z.infer<typeof productSchema>;
