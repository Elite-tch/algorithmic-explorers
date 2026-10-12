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
      aria-label="Go back"
      className="absolute left-4 top-6 z-50 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#f6ab8c]/20 text-[#f6ab8c] shadow-md shadow-[#f6ab8c]/10 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-[#f6ab8c]/30 hover:shadow-lg active:scale-95"
    >
      <ArrowLeft size={22} strokeWidth={2.5} />{" "}
    </button>
  );
};

export default BackButton;
