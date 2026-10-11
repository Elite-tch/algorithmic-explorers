"use client";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <button
      type="button"
      className="cursor-pointer absolute z-50 left-4 top-4 hover-2 hover:bg-white rounded-full transition p-2 outline-3 outline-white"
    >
      <ArrowLeft className="scale-120" color="#f6ab8c" />
    </button>
  );
};

export default BackButton;
