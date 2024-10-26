"use server";
import { RegisterFormValues, SignInFormValues } from "@/types/user";
import { registerSchema, signInSchema } from "./ValidationSchemas";
import { connectDb } from "./db";
import { User } from "@/models/User";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export const signInUser = async (formData: SignInFormValues) => {
  const email = formData.email;
  const password = formData.password;

  const results = signInSchema.safeParse(formData);
  if (!results.success) {
    const errors = results.error.format();
    return errors;
  }

  await connectDb();

  const user = await User.findOne({ email });
  if (!user) {
    return { error: "User is not registered!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/products",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};

export const registerUser = async (formData: RegisterFormValues) => {
  const email = formData.email;
  const password = formData.password;
  const name = formData.name;

  const results = registerSchema.safeParse(formData);

  if (!results.success) {
    const errors = results.error.format();
    return errors;
  }
  await connectDb();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { error: "User already exists" };
  }

  await User.create({ name, email, password });
  redirect("/");
};

export const getUserById = async (id: string) => {
  await connectDb();
  const user = await User.findOne({ _id: id });
  if (!user) return null;
  return user;
};
