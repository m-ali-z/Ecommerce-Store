"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { signInSchema } from "@/lib/ValidationSchemas";
import { SignInFormValues } from "@/types/user";
import { signInUser } from "@/lib/actions";

const SignInCard = () => {
  const [errorMessage, setErrorMessage] = useState();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormValues) => {
    setErrorMessage(null);
    const res = await signInUser(data);
    if (res) {
      setErrorMessage(res);
      console.log(res);
    }
  };

  return (
    <div className="flex h-[25rem] w-[60%] md:w-[30rem] mx-auto border border-black p-4 rounded">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-8"
      >
        <p className="text-center font-bold text-xl">Sign In</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email" title="must be valid email">
              Email
            </label>
            <input
              {...register("email")}
              className="rounded-md p-2"
              placeholder="ali@gmail.com"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" title="must be longer than 8">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="rounded-md p-2"
              placeholder="********"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          {errorMessage && <p>{errorMessage.error}</p>}
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-black w-full text-white hover:bg-gray-700 p-2 rounded"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          <p>
            Do not have an account?{" "}
            <Link href="/register" className="underline">
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInCard;
