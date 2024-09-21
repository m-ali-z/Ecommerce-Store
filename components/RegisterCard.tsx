"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "@/lib/ValidationSchemas";

import { registerUser, signInUser } from "@/lib/actions";
import { RegisterFormValues } from "@/types/user";

const RegisterCard = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    const result = await registerUser(data);
  };

  return (
    <div className="flex h-[28rem] w-[60%] md:w-[30rem] mx-auto border border-black p-4 rounded items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-8"
      >
        <p className="text-center font-bold text-xl">Register</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email" title="must be valid email">
              Name
            </label>
            <input
              {...register("name")}
              className="rounded-md p-2"
              placeholder="ali@gmail.com"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
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
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-black w-full text-white hover:bg-gray-700 p-2 rounded"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterCard;
