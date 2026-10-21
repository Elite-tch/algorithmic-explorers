import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Clock3 } from "lucide-react";

const courses = [
	{
		title: "Backend Development",
		cohort: "Cohort 3",
		status: "In progress",
		dates: "Sep 22 - Dec 15, 2026",
		schedule: "Tuesday and Thursday, 6:00 PM",
		href: "/dashboard/users/cohort",
	},
];

export default function MyCoursesPage() {
	return (
		<div className="space-y-7">
			<header>
				<p className="text-sm font-medium text-[#817b89]">Learning space</p>
				<h1 className="mt-1 text-2xl font-bold text-[#30244f] sm:text-3xl">My courses</h1>
				<p className="mt-2 text-sm text-[#706a78]">Your current and previous course enrollments.</p>
			</header>

			<section className="space-y-4" aria-label="Enrolled courses">
				{courses.map((course) => (
					<article key={course.title} className="rounded-xl border border-[#30244f]/10 bg-white p-5 sm:p-7">
						<div className="flex flex-wrap items-start justify-between gap-4">
							<div className="flex gap-4">
								<div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#f6ab8c]/35 text-[#30244f]"><BookOpen className="h-5 w-5" aria-hidden="true" /></div>
								<div>
									<p className="text-xs font-semibold uppercase tracking-widest text-[#9a573c]">{course.cohort}</p>
									<h2 className="mt-1 text-lg font-bold text-[#30244f]">{course.title}</h2>
								</div>
							</div>
							<span className="rounded-full bg-[#e8f4ed] px-3 py-1 text-xs font-semibold text-[#28734b]">{course.status}</span>
						</div>
						<div className="mt-6 grid gap-3 border-t border-[#30244f]/10 pt-5 text-sm text-[#625c6d] sm:grid-cols-2">
							<p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#9a573c]" aria-hidden="true" />{course.dates}</p>
							<p className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#9a573c]" aria-hidden="true" />{course.schedule}</p>
						</div>
						<Link href={course.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#30244f] transition-colors hover:text-[#2e438e]">Open cohort <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
					</article>
				))}
			</section>
		</div>
	);
}