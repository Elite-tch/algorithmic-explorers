"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	ArrowUpRight,
	BookOpen,
	ClipboardList,
	FolderOpen,
	House,
	Library,
	LogOut,
	ReceiptText,
	UserRound,
	Video,
} from "lucide-react";

const navigation = [
	{ href: "/dashboard/users", label: "Overview", icon: House },
	{ href: "/dashboard/users/courses", label: "My courses", icon: Library },
	{ href: "/dashboard/users/cohort", label: "My cohort", icon: BookOpen },
	{ href: "/dashboard/users/classes", label: "Classes", icon: Video },
	{ href: "/dashboard/users/assignments", label: "Assignments", icon: ClipboardList, count: "1" },
	{ href: "/dashboard/users/resources", label: "Resources", icon: FolderOpen },
	{ href: "/dashboard/users/payments", label: "Payments", icon: ReceiptText },
	{ href: "/dashboard/users/profile", label: "Profile", icon: UserRound },
];

function NavigationLinks({ pathname }) {
	return navigation.map(({ href, label, icon: Icon, count }) => {
		const active = href === "/dashboard/users"
			? pathname === href
			: pathname === href || pathname.startsWith(`${href}/`);

		return (
			<Link
				key={href}
				href={href}
				aria-current={active ? "page" : undefined}
				className={`group flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${active
					? "bg-[#30244f] text-white shadow-[0_5px_14px_rgba(48,36,79,0.18)]"
					: "text-[#625c6d] hover:bg-[#30244f]/7 hover:text-[#30244f]"
					}`}
			>
				<Icon className={`h-4.5 w-4.5 shrink-0 transition-transform duration-200 ${active ? "" : "group-hover:scale-105"}`} aria-hidden="true" />
				<span>{label}</span>
				{count && (
					<span className={`ml-auto grid h-5 min-w-5 place-items-center rounded-full px-1 text-[11px] ${active ? "bg-white/15 text-white" : "bg-[#f6ab8c]/45 text-[#30244f]"}`}>
						{count}
					</span>
				)}
			</Link>
		);
	});
}

export default function UserDashboardLayout({ children }) {
	return (
		<Suspense fallback={<main className="min-h-screen bg-[#f7f6f8]" />}>
			<UserDashboardShell>{children}</UserDashboardShell>
		</Suspense>
	);
}

function UserDashboardShell({ children }) {
	const pathname = usePathname();

	return (
		<div className="min-h-screen bg-[#f7f6f8] text-[#30244f]">
			<aside className="fixed inset-y-0 left-0 z-30 hidden w-[248px] flex-col overflow-y-auto border-r border-[#30244f]/10 bg-white px-4 py-6 lg:flex">
				<Link href="/" className="mb-9 block px-2" aria-label="Algorithmic Explorers home">
					<Image src="/logo.png" alt="Algorithmic Explorers" width={670} height={330} priority className="h-auto w-44" />
				</Link>

				<p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#918b99]">Learning space</p>
				<nav className="flex flex-col gap-1" aria-label="Student dashboard">
					<NavigationLinks pathname={pathname} />
				</nav>

				<div className="mt-auto border-t border-[#30244f]/10 pt-4">
					<div className="flex items-center gap-3 rounded-lg px-2 py-2">
						<div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f6ab8c] text-sm font-bold text-[#30244f]">JD</div>
						<div className="min-w-0 flex-1">
							<p className="truncate text-sm font-semibold">Jordan Davis</p>
							<p className="truncate text-xs text-[#817b89]">Student account</p>
						</div>
						<button type="button" aria-label="Sign out" title="Sign out" className="rounded-md p-2 text-[#817b89] transition-colors hover:bg-[#30244f]/7 hover:text-[#30244f]">
							<LogOut className="h-4 w-4" aria-hidden="true" />
						</button>
					</div>
				</div>
			</aside>

			<div className="min-w-0 lg:ml-[248px]">
				<header className="sticky top-0 z-20 border-b border-[#30244f]/10 bg-white/95 backdrop-blur-md lg:hidden">
					<div className="flex h-15 items-center justify-between px-4">
						<Link href="/" aria-label="Algorithmic Explorers home">
							<Image src="/logo.png" alt="Algorithmic Explorers" width={670} height={330} priority className="h-auto w-32" />
						</Link>
						<Link href="/dashboard/users/profile" aria-label="Your profile" className="grid h-9 w-9 place-items-center rounded-full bg-[#f6ab8c] text-xs font-bold text-[#30244f]">JD</Link>
					</div>
					<nav className="scrollbar-none flex gap-1 overflow-x-auto border-t border-[#30244f]/6 px-3 py-2" aria-label="Student dashboard">
						<NavigationLinks pathname={pathname} />
					</nav>
				</header>

				<main className="mx-auto w-full max-w-360 px-4 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-9">
					<div className="mb-6 hidden items-center justify-end lg:flex">
						<Link href="/" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#817b89] transition-colors hover:text-[#30244f]">
							Visit website <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
						</Link>
					</div>
					{children}
				</main>
			</div>
		</div>
	);
}