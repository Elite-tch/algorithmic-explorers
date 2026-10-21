export default function AdminDashboardPage() {
	return (
		<main className="grid min-h-screen place-items-center bg-[#f7f6f8] px-5 text-[#30244f]">
			<section className="w-full max-w-xl rounded-xl border border-[#30244f]/10 bg-white p-7 sm:p-10">
				<p className="text-xs font-bold uppercase tracking-[0.13em] text-[#9a573c]">Algorithmic Explorers</p>
				<h1 className="mt-3 text-2xl font-bold">Admin workspace</h1>
				<p className="mt-3 text-sm leading-6 text-[#706a78]">The admin area is scaffolded separately from the student experience. Operational tools can be added here as the platform grows.</p>
			</section>
		</main>
	);
}