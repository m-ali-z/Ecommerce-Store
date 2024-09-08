import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be at least 3 letters." })
    .max(30, { message: "Name exceeded 30 letters." }),
  email: z.string().email({ message: "A valid email is required" }),
  password: z
    .string()
    .min(8, { message: "Password should be more than 8 letters." }),
});

export const signInSchema = z.object({
  email: z.string().email({ message: "A valid email is required" }),
  password: z.string().min(1),
});
