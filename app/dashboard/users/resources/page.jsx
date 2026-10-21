import { ArrowUpRight, BookOpen, FileText, Link2 } from "lucide-react";

const resources = [
	{ title: "Express.js class slides", type: "PDF document", date: "October 15, 2026", icon: FileText },
	{ title: "Starter repository", type: "Code repository", date: "October 15, 2026", icon: Link2 },
	{ title: "Backend development notes", type: "Class notes", date: "October 12, 2026", icon: BookOpen },
];

export default function ResourcesPage() {
	return (
		<div className="space-y-7">
			<header>
				<p className="text-sm font-medium text-[#817b89]">Backend Development · Cohort 3</p>
				<h1 className="mt-1 text-2xl font-bold text-[#30244f] sm:text-3xl">Resources</h1>
				<p className="mt-2 text-sm text-[#706a78]">Learning materials shared with your cohort and classes.</p>
			</header>
			<section className="overflow-hidden rounded-xl border border-[#30244f]/10 bg-white" aria-label="Learning resources">
				{resources.map(({ title, type, date, icon: Icon }, index) => (
					<article key={title} className={`flex items-center gap-4 p-4 sm:p-5 ${index ? "border-t border-[#30244f]/10" : ""}`}>
						<div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#f6ab8c]/30 text-[#30244f]"><Icon className="h-5 w-5" aria-hidden="true" /></div>
						<div className="min-w-0 flex-1"><h2 className="truncate text-sm font-semibold text-[#30244f]">{title}</h2><p className="mt-1 text-xs text-[#817b89]">{type} <span aria-hidden="true">·</span> Added {date}</p></div>
						<button type="button" aria-label={`Open ${title}`} title={`Open ${title}`} className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[#625c6d] transition-colors hover:bg-[#30244f]/5 hover:text-[#30244f]"><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button>
					</article>
				))}
			</section>
		</div>
	);
}