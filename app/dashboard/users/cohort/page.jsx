import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, MessageSquareText, UserRound } from "lucide-react";

export default function CohortOverviewPage() {
	return (
		<div className="space-y-7">
			<header className="flex flex-wrap items-start justify-between gap-4">
				<div>
					<p className="text-sm font-medium text-[#817b89]">My courses / Cohort 3</p>
					<h1 className="mt-1 text-2xl font-bold text-[#30244f] sm:text-3xl">Backend Development</h1>
					<p className="mt-2 text-sm text-[#706a78]">Your cohort schedule, instructor updates, and class community.</p>
				</div>
				<a href="https://t.me/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#30244f] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2e438e]">Join Telegram <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
			</header>

			<section className="grid gap-4 sm:grid-cols-3" aria-label="Cohort details">
				<InfoItem icon={CalendarDays} label="Dates" value="Sep 22 - Dec 15, 2026" />
				<InfoItem icon={Clock3} label="Class schedule" value="Tue and Thu, 6:00 PM" />
				<InfoItem icon={UserRound} label="Instructor" value="Instructor details" />
			</section>

			<section className="rounded-xl border border-[#30244f]/10 bg-white p-5 sm:p-7">
				<div className="flex items-center gap-2"><MessageSquareText className="h-5 w-5 text-[#9a573c]" aria-hidden="true" /><h2 className="text-base font-bold text-[#30244f]">Announcements</h2></div>
				<article className="mt-5 border-t border-[#30244f]/10 pt-5">
					<p className="text-sm font-semibold text-[#30244f]">Class schedule update</p>
					<p className="mt-2 text-sm leading-6 text-[#706a78]">Thursday’s session will begin at 6:30 PM. Join the class through the cohort Telegram group.</p>
					<p className="mt-3 text-xs text-[#817b89]">Posted October 19, 2026</p>
				</article>
			</section>

			<div className="flex flex-wrap gap-3">
				<Link href="/dashboard/users/classes" className="rounded-lg border border-[#30244f]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#30244f] transition-colors hover:border-[#30244f]/35">Browse classes</Link>
				<Link href="/dashboard/users/assignments" className="rounded-lg border border-[#30244f]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#30244f] transition-colors hover:border-[#30244f]/35">View assignments</Link>
			</div>
		</div>
	);
}

function InfoItem({ icon: Icon, label, value }) {
	return (
		<div className="rounded-xl border border-[#30244f]/10 bg-white p-4">
			<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#817b89]"><Icon className="h-4 w-4 text-[#9a573c]" aria-hidden="true" />{label}</div>
			<p className="mt-3 text-sm font-semibold text-[#30244f]">{value}</p>
		</div>
	);
}