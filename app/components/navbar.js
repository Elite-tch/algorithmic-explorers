'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	BookOpen,
	BriefcaseBusiness,
	Home,
	Info,
	LogIn,
	Mail,
	UserPlus,
	Wrench,
} from "lucide-react";

const navigationLinks = [
	{ href: "/", label: "Home", icon: Home },
	{ href: "/about", label: "About", icon: Info },
	{ href: "/courses", label: "Courses", icon: BookOpen },
	{ href: "/service", label: "Services", icon: Wrench },
	{ href: "/portfolio", label: "Portfolio", icon: BriefcaseBusiness },
	{ href: "/contact", label: "Contact", icon: Mail },
];

function NavigationItems({ pathname, mobile = false }) {
	return navigationLinks.map(({ href, label, icon: Icon }) => {
		const isActive = pathname === href;

		return (
			<Link
				key={href}
				href={href}
				className={`group relative flex min-w-0 flex-col items-center justify-center gap-1 px-2 py-2 text-[10px] font-semibold transition-all duration-200 after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:scale-x-0 after:bg-[#30244f] after:transition-transform after:duration-200 sm:text-xs md:flex-row md:gap-2 md:px-3 md:py-2.5 md:text-sm ${
					isActive
						? "font-bold text-[#30244f] after:scale-x-100"
						: "text-[#30244f] hover:text-[#2e438e] hover:after:scale-x-100"
				}`}
				aria-current={isActive ? "page" : undefined}
			>
				<Icon className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 md:hidden" aria-hidden="true" />
				<span className="truncate">{label}</span>
			</Link>
		);
	});
}

export default function Navbar() {
	const pathname = usePathname();

	return (
		<>
			<header className="sticky top-0 z-40 border-b border-[#30244f]/10 bg-white/95 shadow-[0_2px_18px_rgba(48,36,79,0.06)] backdrop-blur-md">
				<div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-2 px-3 sm:px-6 lg:px-8">
					<Link className="shrink-0" href="/" aria-label="Algorithmic Explorers home">
						<Image
							src="/logo.png"
							alt="Algorithmic Explorers"
							width={670}
							height={330}
							priority
							className="h-auto w-28 sm:w-40 lg:w-48"
						/>
					</Link>

					<nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
						<NavigationItems pathname={pathname} />
					</nav>

					<div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
						<Link
							className={`inline-flex items-center gap-1 rounded-full px-2.5 py-2 text-xs font-semibold transition-colors duration-200 sm:gap-2 sm:px-3 sm:text-sm ${
								pathname === "/auth/login"
									? "bg-[#30244f]/10 text-[#30244f]"
									: "text-[#30244f] bg-[#f6ab8c] hover:bg-[#f6ab8c]/80 hover:text-[#2e438e] "
							}`}
							href="/auth/login"
							aria-current={pathname === "/auth/login" ? "page" : undefined}
						>
							<LogIn className="h-4 w-4" aria-hidden="true" />
							<span>Log in</span>
						</Link>
						<Link
							className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold text-white shadow-sm  hover:bg-[#2e438e] hover:shadow-md sm:gap-2 sm:px-4 sm:text-sm ${
								pathname === "/auth/signup" ? "bg-[#2e438e]" : "bg-[#30244f]"
							}`}
							href="/auth/signup"
							aria-current={pathname === "/auth/signup" ? "page" : undefined}
						>
							<UserPlus className="h-4 w-4" aria-hidden="true" />
							<span>Sign up</span>
						</Link>
					</div>
				</div>
			</header>

			<nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-6 border-t border-[#30244f]/10 bg-white/95 px-1 pt-2 shadow-[0_-4px_20px_rgba(48,36,79,0.08)] backdrop-blur-lg pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden" aria-label="Main navigation">
				<NavigationItems pathname={pathname} mobile />
			</nav>
		</>
	);
}
