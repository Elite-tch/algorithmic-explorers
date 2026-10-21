import Link from "next/link";
import { ArrowLeft, CalendarDays, Check, FileUp } from "lucide-react";

const assignmentDetails = {
	"javascript-fundamentals": { title: "JavaScript Fundamentals", status: "Reviewed", due: "October 9, 2026", description: "Demonstrate your understanding of JavaScript fundamentals by completing the cohort exercises and explaining your approach." },
	"build-rest-api": { title: "Build a REST API", status: "Open", due: "October 23, 2026", description: "Create a REST API using Express.js. Define clear routes, validate incoming data, and persist records in a database." },
	"authentication": { title: "Authentication", status: "Upcoming", due: "October 30, 2026", description: "Assignment instructions will be available when this work opens." },
};

export default async function AssignmentDetailPage({ params }) {
	const { assignmentId } = await params;
	const assignment = assignmentDetails[assignmentId] ?? assignmentDetails["build-rest-api"];

	return (
		<div className="mx-auto max-w-4xl space-y-6">
			<Link href="/dashboard/users/assignments" className="inline-flex items-center gap-2 text-sm font-semibold text-[#625c6d] transition-colors hover:text-[#30244f]"><ArrowLeft className="h-4 w-4" aria-hidden="true" />All assignments</Link>
			<header>
				<p className="text-sm font-medium text-[#817b89]">Backend Development · Cohort 3</p>
				<h1 className="mt-1 text-2xl font-bold text-[#30244f] sm:text-3xl">{assignment.title}</h1>
				<div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#706a78]"><span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#9a573c]" aria-hidden="true" />Due {assignment.due}</span><span className="rounded-full bg-[#fff1eb] px-3 py-1 text-xs font-semibold text-[#9a573c]">{assignment.status}</span></div>
			</header>
			<section className="rounded-xl border border-[#30244f]/10 bg-white p-5 sm:p-7">
				<h2 className="text-base font-bold text-[#30244f]">Instructions</h2>
				<p className="mt-3 text-sm leading-6 text-[#706a78]">{assignment.description}</p>
				<h3 className="mt-6 text-sm font-bold text-[#30244f]">Requirements</h3>
				<ul className="mt-3 space-y-2 text-sm leading-6 text-[#706a78]"><li className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-[#28734b]" aria-hidden="true" />Use clear, descriptive route names.</li><li className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-[#28734b]" aria-hidden="true" />Handle invalid requests with appropriate responses.</li><li className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-[#28734b]" aria-hidden="true" />Include a README with setup instructions.</li></ul>
			</section>
			<section className="rounded-xl border border-[#30244f]/10 bg-white p-5 sm:p-7">
				<div className="flex items-center gap-2"><FileUp className="h-5 w-5 text-[#9a573c]" aria-hidden="true" /><h2 className="text-base font-bold text-[#30244f]">Submission</h2></div>
				<p className="mt-2 text-sm text-[#706a78]">Submission controls and accepted formats will be connected here.</p>
				<div className="mt-5 rounded-lg border border-dashed border-[#30244f]/20 bg-[#f7f6f8] px-4 py-8 text-center text-sm text-[#817b89]">Text, GitHub URL, or file upload</div>
			</section>
		</div>
	);
}