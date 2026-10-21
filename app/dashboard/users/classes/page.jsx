import Link from "next/link";
import { ArrowRight, CirclePlay, Clock3 } from "lucide-react";

const classes = [
	{ id: "01-introduction", number: "01", title: "Introduction to Backend Development", date: "September 24, 2026", duration: "1 hr 12 min" },
	{ id: "02-node-fundamentals", number: "02", title: "Node.js Fundamentals", date: "September 29, 2026", duration: "1 hr 36 min" },
	{ id: "08-express-routing", number: "08", title: "Express Routing", date: "October 15, 2026", duration: "1 hr 24 min" },
];

export default function ClassesPage() {
	return (
		<div className="space-y-7">
			<header>
				<p className="text-sm font-medium text-[#817b89]">Backend Development · Cohort 3</p>
				<h1 className="mt-1 text-2xl font-bold text-[#30244f] sm:text-3xl">Classes</h1>
				<p className="mt-2 text-sm text-[#706a78]">Class recordings are available to revisit whenever you need them.</p>
			</header>
			<section className="overflow-hidden rounded-xl border border-[#30244f]/10 bg-white" aria-label="Class recordings">
				{classes.map((item, index) => (
					<article key={item.id} className={`flex flex-wrap items-center gap-4 p-4 sm:p-5 ${index ? "border-t border-[#30244f]/10" : ""}`}>
						<span className="w-8 font-mono text-sm text-[#9a573c]">{item.number}</span>
						<div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#f6ab8c]/35 text-[#30244f]"><CirclePlay className="h-5 w-5" aria-hidden="true" /></div>
						<div className="min-w-[180px] flex-1"><h2 className="text-sm font-semibold text-[#30244f]">{item.title}</h2><p className="mt-1 text-xs text-[#817b89]">{item.date} <span aria-hidden="true">·</span> <Clock3 className="mx-1 inline h-3 w-3" aria-hidden="true" />{item.duration}</p></div>
						<Link href={`/dashboard/users/classes/${item.id}`} className="inline-flex items-center gap-2 rounded-lg bg-[#30244f] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2e438e]">Watch recording <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
					</article>
				))}
			</section>
		</div>
	);
}