"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function AppChrome({ children }) {
	const pathname = usePathname();
	const isDashboard = pathname.startsWith("/dashboard");

	if (isDashboard) {
		return children;
	}

	return (
		<>
			<Navbar />
			<div className="flex-1 pb-24 md:pb-0">{children}</div>
		</>
	);
}