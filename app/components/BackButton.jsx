"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  function navigateBack() {
    console.log("Navigated back to home");
    router.back();
  }

  return (
    <button
      type="button"
      onClick={navigateBack}
      className="cursor-pointer absolute z-50 left-4 top-4 hover-2 hover:bg-white rounded-full transition p-2 outline-3 outline-white"
    >
      <ArrowLeft className="scale-120" color="#f6ab8c" />
    </button>
  );
};

export default BackButton;
