import { ChevronDown } from "lucide-react";

const FormDropdown = ({
  id,
  label,
  options = [],
  placeholder = "Select an option...",
  value,
  onChange,
  name,
  required = false,
  disabled = false,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <div className="relative">
        <select
          id={id}
          name={name || id}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`w-full pl-4 pr-12 py-3.5 text-sm border rounded-xl
            focus:outline-none focus:border-[#352951]
            focus:ring-1 focus:ring-[#352951]
            text-gray-700 appearance-none bg-white
            transition-colors cursor-pointer
            disabled:bg-gray-100 disabled:cursor-not-allowed border-gray-200 ${className}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
          <ChevronDown size={18} />
        </div>
      </div>
    </div>
  );
};

export default FormDropdown;
