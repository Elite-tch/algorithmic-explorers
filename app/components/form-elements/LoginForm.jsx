"use client";
import { LogInIcon } from "lucide-react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

const LoginForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    // Later Submit Logic
  }
  return (
    <div className="flex-1 flex flex-col justify-between px-7 pt-4 pb-8 max-w-md mx-auto w-full">
      <form onSubmit={handleSubmit}>
        {/* INPUTS */}

        <div className="space-y-4">
          {/* Email / Phone Input */}
          <FormInput
            type="text"
            name="emailOrPhone"
            placeholder="Email or phone"
          />

          {/* Password Input */}
          <FormInput type="text" name="password" placeholder="Password" />

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
    </div>
  );
};
export default LoginForm;
