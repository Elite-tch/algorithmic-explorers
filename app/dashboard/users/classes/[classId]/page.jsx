import Link from "next/link";
import { ArrowLeft, BookOpen, CirclePlay, FileText } from "lucide-react";

const recordings = {
	"01-introduction": { title: "Introduction to Backend Development", date: "September 24, 2026", description: "An introduction to the backend development learning path and the tools used throughout the cohort." },
	"02-node-fundamentals": { title: "Node.js Fundamentals", date: "September 29, 2026", description: "Explore the Node.js runtime, modules, and the foundations of server-side JavaScript." },
	"08-express-routing": { title: "Express Routing", date: "October 15, 2026", description: "Build organized API routes and handle requests with Express.js." },
};

export default async function RecordingPage({ params }) {
	const { classId } = await params;
	const recording = recordings[classId] ?? recordings["08-express-routing"];

	return (
		<div className="mx-auto max-w-5xl space-y-6">
			<Link href="/dashboard/users/classes" className="inline-flex items-center gap-2 text-sm font-semibold text-[#625c6d] transition-colors hover:text-[#30244f]"><ArrowLeft className="h-4 w-4" aria-hidden="true" />All classes</Link>
			<header>
				<p className="text-sm font-medium text-[#817b89]">Backend Development · {recording.date}</p>
				<h1 className="mt-1 text-2xl font-bold text-[#30244f] sm:text-3xl">{recording.title}</h1>
			</header>
			<div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
				<section className="overflow-hidden rounded-xl bg-[#211b31]">
					<div className="grid aspect-video place-items-center text-white">
						<div className="text-center"><CirclePlay className="mx-auto h-12 w-12 text-[#f6ab8c]" aria-hidden="true" /><p className="mt-3 text-sm font-semibold">Recording player</p><p className="mt-1 text-xs text-white/60">The protected recording will appear here.</p></div>
					</div>
					<div className="bg-white p-5"><h2 className="text-base font-bold text-[#30244f]">About this class</h2><p className="mt-2 text-sm leading-6 text-[#706a78]">{recording.description}</p></div>
				</section>
				<aside className="space-y-4">
					<section className="rounded-xl border border-[#30244f]/10 bg-white p-5"><div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#9a573c]" aria-hidden="true" /><h2 className="text-sm font-bold text-[#30244f]">Related resources</h2></div><p className="mt-3 text-sm text-[#706a78]">Class slides and notes will be listed here.</p><Link href="/dashboard/users/resources" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#30244f] hover:text-[#2e438e]">Open resources <FileText className="h-4 w-4" aria-hidden="true" /></Link></section>
					<section className="rounded-xl border border-[#30244f]/10 bg-white p-5"><h2 className="text-sm font-bold text-[#30244f]">Related assignment</h2><p className="mt-3 text-sm text-[#706a78]">No assignment linked to this class.</p></section>
				</aside>
			</div>
		</div>
	);
}