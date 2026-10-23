import { MessageSquare } from "lucide-react";

const FormTextArea = ({ id, label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute top-4 left-0 flex items-start pl-4 pointer-events-none text-gray-400">
          <MessageSquare size={18} />
        </div>
        <textarea
          id={id}
          rows={4}
          className="w-full pl-12 pr-4 py-3.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#352951] focus:ring-1 focus:ring-[#352951] text-gray-700 placeholder-gray-400 transition-colors resize-none"
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
};

export default FormTextArea;
