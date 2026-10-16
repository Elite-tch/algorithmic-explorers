"use client";
import { UserRound, LockKeyhole, LogInIcon, User } from "lucide-react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import Link from "next/link";
import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  function handleSubmit(e) {
    e.preventDefault();
    // Later Submit Logic
  }
  function handleChange({ target: { name, value } }) {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  }

  return (
    <div className="flex flex-col flex-1 px-7 pt-4 pb-8 max-w-md mx-auto lg:mx-20 lg:mt-20 w-full ">
      <h1
        data-aos="fade-right"
        suppressHydrationWarning={true} //  Fix hydration warning issue
        className="hidden lg:flex justify-center items-center gap-3 text-4xl font-extrabold tracking-tight text-[#352951]"
      >
        <span>WELCOME BACK</span>
      </h1>
      <p
        data-aos="fade-left"
        suppressHydrationWarning={true} //  Fix hydration warning issue
        className="hidden lg:flex justify-center text-[#f6ab8c] font-bold text=xl my-2.5"
      >
        Sign in to Continue your journey
      </p>

      <form onSubmit={handleSubmit}>
        {/* INPUTS */}
        <div className="space-y-4">
          {/* Email / Phone Input */}
          <FormInput
            name="email"
            type="text"
            placeholder="Enter your email"
            icon={UserRound}
            autoComplete="email"
            value={formFields.email}
            onChange={handleChange}
          />

          {/* Password Input */}
          <FormInput
            name="password"
            type="text"
            placeholder="Enter your Password"
            icon={LockKeyhole}
            isPassword
            autoComplete="cureen-password"
            value={formFields.password}
            onChange={handleChange}
          />

          {/* Forgot Password */}
          <div className="flex justify-end pt-1">
            <a
              href="#forgot"
              className="text-xs font-semibold text-[#352951] hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <FormButton>
            Login <LogInIcon />
          </FormButton>

          {/* Divider */}
          <div className="flex items-center justify-center space-x-3 py-4">
            <span className="h-px w-12 bg-gray-200" />
            <span className="text-xs text-gray-400">or continue with</span>
            <span className="h-px w-12 bg-gray-200" />
          </div>
          {/* Google button */}

          <FormButton buttonType="google">Sign In with Google</FormButton>
        </div>
      </form>

      <p className="mt-6 text-center text-xs text-gray-400">
        {`Don't have an account? `}
        <Link
          href="/auth/signup"
          className="font-semibold text-[#f6ab8c] hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};
export default LoginForm;
