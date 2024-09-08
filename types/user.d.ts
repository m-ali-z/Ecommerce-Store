import * as z from "zod";
import { registerSchema, signInSchema } from "@/lib/ValidationSchemas";

type RegisterFormValues = z.infer<typeof registerSchema>;
type SignInFormValues = z.infer<typeof signInSchema>;
