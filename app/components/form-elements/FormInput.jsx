import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const FormInput = ({
  type = "text",
  value,
  name,
  placeholder,
  icon: Icon,
  isPassword = false,
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword && showPassword ? "text" : type;

  function handlePasswordDisplay() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className="relative flex items-center">
      {Icon && (
        <Icon
          size={20}
          strokeWidth={1.8}
          className="absolute left-4 text-[#352951] pointer-events-none"
          aria-hidden="true"
        />
      )}
      <input
        {...props}
        name={name}
        type={inputType}
        value={value}
        placeholder={placeholder}
        className={`w-full 
        ${Icon ? "pl-12" : "pr-4"} 
        ${isPassword ? "pl-12" : "pr-4"} 
        py-3.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#352951] focus:ring-1 focus:ring-[#7b2cbf] text-gray-700 placeholder-gray-400 transition-colors`}
        onChange={onChange}
      />

      {isPassword && (
        <button
          type="button"
          onClick={handlePasswordDisplay}
          className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:visible:ring-2 focus-visible:ring-[#352951] rounded-sm transition-colors"
          aria-label={showPassword ? "Hide passwrd" : "Show password"}
          aria-pressed={showPassword}
        >
          {showPassword ? (
            <EyeOff size={20} strokeWidth={1.8} />
          ) : (
            <Eye size={20} strokeWidth={1.8} />
          )}
        </button>
      )}
    </div>
  );
};

export default FormInput;
