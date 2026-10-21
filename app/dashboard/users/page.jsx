import Link from "next/link";
import {
	ArrowRight,
	ArrowUpRight,
	BookOpen,
	CalendarDays,
	CirclePlay,
	Clock3,
	Download,
	MessageSquareText,
} from "lucide-react";

export default function UserDashboardPage() {
	return (
		<div className="space-y-7 sm:space-y-8">
			<section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
				<div>
					<p className="mb-2 text-sm font-medium text-[#817b89]">Tuesday, October 20, 2026</p>
					<h1 className="text-2xl font-bold tracking-normal text-[#30244f] sm:text-[30px]">Welcome back, Jordan</h1>
					<p className="mt-2 text-sm text-[#706a78]">Here’s what’s happening with your learning.</p>
				</div>
				<Link href="/dashboard/users/cohort" className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#30244f] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2e438e] hover:shadow-md">
					Open my cohort <ArrowRight className="h-4 w-4" aria-hidden="true" />
				</Link>
			</section>

			<section className="relative overflow-hidden rounded-xl bg-[#30244f] p-5 text-white sm:p-7">
				<div className="absolute -right-10 -top-24 h-64 w-64 rounded-full border-[28px] border-[#f6ab8c]/10" aria-hidden="true" />
				<div className="relative grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
					<div>
						<div className="mb-4 flex flex-wrap items-center gap-2">
							<span className="rounded-full bg-[#f6ab8c] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#30244f]">Active cohort</span>
							<span className="text-xs text-white/70">Cohort 3 · Week 5 of 12</span>
						</div>
						<h2 className="text-xl font-bold sm:text-2xl">Backend Development</h2>
						<p className="mt-2 max-w-xl text-sm leading-6 text-white/75">Build and ship reliable server-side applications with Node.js, Express, and databases.</p>
						<div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/75">
							<span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" aria-hidden="true" /> Sep 22 – Dec 15, 2026</span>
							<span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" /> Tue & Thu · 6:00 PM</span>
						</div>
					</div>
					<a href="https://t.me/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-[#f6ab8c] px-4 py-3 text-sm font-bold text-[#30244f] transition-colors hover:bg-white">
						Join Telegram <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
					</a>
				</div>
			</section>

			<div className="grid gap-5 xl:grid-cols-2">
				<section className="rounded-xl border border-[#30244f]/10 bg-white p-5 sm:p-6">
					<div className="mb-5 flex items-start justify-between gap-3">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#817b89]">Latest recording</p>
							<h2 className="mt-1.5 text-lg font-bold">Express Routing</h2>
						</div>
						<span className="rounded-full bg-[#e8f4ed] px-2.5 py-1 text-[11px] font-semibold text-[#28734b]">Available</span>
					</div>
					<div className="flex items-center gap-4 rounded-lg bg-[#f7f6f8] p-3.5">
						<div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#f6ab8c]/35 text-[#30244f]"><CirclePlay className="h-6 w-6" aria-hidden="true" /></div>
						<div className="min-w-0 flex-1">
							<p className="text-sm font-semibold">Class 08 · October 15</p>
							<p className="mt-1 text-xs text-[#817b89]">Node.js & Express · 1 hr 24 min</p>
						</div>
						<Link href="/dashboard/users/classes" aria-label="Watch latest recording" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#30244f] text-white transition-colors hover:bg-[#2e438e]"><ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
					</div>
					<Link href="/dashboard/users/classes" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#30244f] hover:text-[#2e438e]">View all classes <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
				</section>

				<section className="rounded-xl border border-[#30244f]/10 bg-white p-5 sm:p-6">
					<div className="mb-5 flex items-start justify-between gap-3">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#817b89]">Up next</p>
							<h2 className="mt-1.5 text-lg font-bold">Your assignment</h2>
						</div>
						<span className="rounded-full bg-[#fff1eb] px-2.5 py-1 text-[11px] font-semibold text-[#9a573c]">Due soon</span>
					</div>
					<div className="rounded-lg border-l-[3px] border-[#f6ab8c] bg-[#f7f6f8] p-4">
						<p className="text-sm font-bold">Build a REST API</p>
						<p className="mt-1.5 text-xs leading-5 text-[#706a78]">Create a REST API with Express.js and persist data with a database.</p>
						<p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#9a573c]"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" /> Due October 23, 2026</p>
					</div>
					<Link href="/dashboard/users/assignments" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#30244f] hover:text-[#2e438e]">View assignment <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
				</section>
			</div>

			<div className="grid gap-5 xl:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.8fr)]">
				<section className="rounded-xl border border-[#30244f]/10 bg-white p-5 sm:p-6">
					<div className="mb-4 flex items-center justify-between">
						<h2 className="text-base font-bold">Announcements</h2>
						<Link href="/dashboard/users/cohort" className="text-xs font-semibold text-[#625c6d] hover:text-[#30244f]">View cohort <ArrowRight className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" /></Link>
					</div>
					<div className="flex gap-3 border-t border-[#30244f]/[0.07] py-4">
						<div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#f6ab8c]/25 text-[#30244f]"><MessageSquareText className="h-4 w-4" aria-hidden="true" /></div>
						<div>
							<p className="text-sm font-semibold">Class schedule update</p>
							<p className="mt-1 text-xs leading-5 text-[#817b89]">Thursday’s session will begin at 6:30 PM. The Telegram link is in your cohort space.</p>
							<p className="mt-2 text-[11px] text-[#a09aa7]">Posted October 19</p>
						</div>
					</div>
				</section>

				<section className="rounded-xl border border-[#30244f]/10 bg-white p-5 sm:p-6">
					<div className="mb-4 flex items-center justify-between">
						<h2 className="text-base font-bold">Recently added</h2>
						<Link href="/dashboard/users/resources" aria-label="View all resources" className="rounded-md p-1.5 text-[#817b89] transition-colors hover:bg-[#30244f]/5 hover:text-[#30244f]"><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
					</div>
					<Link href="/dashboard/users/resources" className="group flex items-center gap-3 border-t border-[#30244f]/[0.07] py-4">
						<div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#e9e8f0] text-[#30244f]"><BookOpen className="h-[18px] w-[18px]" aria-hidden="true" /></div>
						<div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold group-hover:text-[#2e438e]">Express.js class slides</p><p className="mt-1 text-xs text-[#817b89]">PDF · Added October 15</p></div>
						<Download className="h-4 w-4 shrink-0 text-[#817b89]" aria-hidden="true" />
					</Link>
					<Link href="/dashboard/users/resources" className="text-sm font-semibold text-[#30244f] hover:text-[#2e438e]">Browse resources <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" /></Link>
				</section>
			</div>
		</div>
	);
}