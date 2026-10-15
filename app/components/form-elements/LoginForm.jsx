"use client";
import { UserRound, LockKeyhole, LogInIcon } from "lucide-react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import Link from "next/link";

const LoginForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    // Later Submit Logic
  }
  return (
    <div className="flex flex-col flex-1 justify-between px-7 pt-4 pb-8 max-w-md mx-auto lg:mx-20 lg:mt-20 w-full ">
      <form onSubmit={handleSubmit}>
        {/* INPUTS */}
        <h1 className="hidden lg:block text-4xl font-bold tracking-tight text-[#352951]">
          Welcome
        </h1>
        <p className="hidden lg:block text-[#f6ab8c] font-bold text-sm mb-1.5">
          Sign in to continue
        </p>
        <div className="space-y-4">
          {/* Email / Phone Input */}
          <FormInput
            name="email"
            type="text"
            placeholder="Enter your email or phone"
            icon={UserRound}
            autoComplete="email"
          />

          {/* Password Input */}
          <FormInput
            name="password"
            type="text"
            placeholder="Enter your Password"
            icon={LockKeyhole}
            isPassword
            autoComplete="cureen-password"
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
        {`Don't have an account?`}
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
