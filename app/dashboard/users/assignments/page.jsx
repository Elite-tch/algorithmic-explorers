import Link from "next/link";
import { ArrowRight, ClipboardList, Clock3 } from "lucide-react";

const assignments = [
	{ id: "javascript-fundamentals", title: "JavaScript Fundamentals", status: "Reviewed", due: "October 9, 2026" },
	{ id: "build-rest-api", title: "Build a REST API", status: "Open", due: "October 23, 2026" },
	{ id: "authentication", title: "Authentication", status: "Upcoming", due: "October 30, 2026" },
];

const statusStyles = {
	Reviewed: "bg-[#e8f4ed] text-[#28734b]",
	Open: "bg-[#fff1eb] text-[#9a573c]",
	Upcoming: "bg-[#eeedf3] text-[#625c6d]",
};

export default function AssignmentsPage() {
	return (
		<div className="space-y-7">
			<header>
				<p className="text-sm font-medium text-[#817b89]">Backend Development · Cohort 3</p>
				<h1 className="mt-1 text-2xl font-bold text-[#30244f] sm:text-3xl">Assignments</h1>
				<p className="mt-2 text-sm text-[#706a78]">Review requirements, submit your work, and check instructor feedback.</p>
			</header>
			<section className="overflow-hidden rounded-xl border border-[#30244f]/10 bg-white" aria-label="Cohort assignments">
				{assignments.map((assignment, index) => (
					<article key={assignment.id} className={`flex flex-wrap items-center gap-4 p-4 sm:p-5 ${index ? "border-t border-[#30244f]/10" : ""}`}>
						<div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#f6ab8c]/30 text-[#30244f]"><ClipboardList className="h-5 w-5" aria-hidden="true" /></div>
						<div className="min-w-[180px] flex-1"><h2 className="text-sm font-semibold text-[#30244f]">{assignment.title}</h2><p className="mt-1 flex items-center gap-1.5 text-xs text-[#817b89]"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" />Due {assignment.due}</p></div>
						<span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[assignment.status]}`}>{assignment.status}</span>
						<Link href={`/dashboard/users/assignments/${assignment.id}`} aria-label={`Open ${assignment.title}`} className="grid h-9 w-9 place-items-center rounded-full text-[#30244f] transition-colors hover:bg-[#30244f]/5"><ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
					</article>
				))}
			</section>
		</div>
	);
}