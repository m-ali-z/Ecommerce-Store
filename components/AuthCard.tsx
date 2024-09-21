import React, { useState } from "react";
import RegisterCard from "./RegisterCard";
import SignInCard from "./SignInCard";

const AuthCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="flex justify-center mt-10">
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            onClick={handleCheck}
            className="sr-only peer"
            value=""
          />
          <span>Sign In </span>
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span>Register</span>
        </label>
      </div>
      <div className="group mt-5 [perspective:1000rem]">
        <div
          className={`shadow-xl relative w-full [transform-style:preserve-3d] transition-all duration-1000 ${
            isChecked ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <SignInCard />
          </div>
          <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <RegisterCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthCard;
