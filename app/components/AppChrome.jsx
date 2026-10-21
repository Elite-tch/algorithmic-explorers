"use client";

import { usePathname } from "next/navigation";
import Navbar from "./layout/navbar";
import Footer from "./footer";

export default function AppChrome({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isAuth = pathname.startsWith("/auth");

  if (isDashboard) {
    return children;
  }

  return (
    <>
      <Navbar />
      <div className="flex-1 pb-24 md:pb-0">{children}</div>
      {!isAuth && <Footer />}
    </>
  );
}
