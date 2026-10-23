import { MessageSquare } from "lucide-react";

const FormTextArea = ({ id, label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute top-4 left-0 flex items-start pl-4  text-gray-400">
          <MessageSquare size={18} />
        </div>
        <textarea
          id={id}
          rows={4}
          className="py-10 px-20"
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
};

export default FormTextArea;
