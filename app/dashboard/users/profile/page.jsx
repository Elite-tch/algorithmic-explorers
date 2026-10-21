import { Mail, Phone, UserRound } from "lucide-react";

export default function ProfilePage() {
	return (
		<div className="max-w-4xl space-y-7">
			<header>
				<p className="text-sm font-medium text-[#817b89]">Account</p>
				<h1 className="mt-1 text-2xl font-bold text-[#30244f] sm:text-3xl">Profile</h1>
				<p className="mt-2 text-sm text-[#706a78]">Your personal information and account settings.</p>
			</header>
			<section className="rounded-xl border border-[#30244f]/10 bg-white p-5 sm:p-7">
				<div className="flex items-center gap-4 border-b border-[#30244f]/10 pb-6">
					<div className="grid h-14 w-14 place-items-center rounded-full bg-[#f6ab8c] text-lg font-bold text-[#30244f]">JD</div>
					<div><h2 className="text-base font-bold text-[#30244f]">Jordan Davis</h2><p className="mt-1 text-sm text-[#817b89]">Student account</p></div>
				</div>
				<dl className="divide-y divide-[#30244f]/10">
					<ProfileField icon={UserRound} label="Full name" value="Jordan Davis" />
					<ProfileField icon={Mail} label="Email address" value="jordan@example.com" />
					<ProfileField icon={Phone} label="Phone number" value="Not added" />
				</dl>
				<p className="mt-5 rounded-lg bg-[#f7f6f8] p-4 text-sm leading-6 text-[#706a78]">Profile editing and password controls will be connected to account settings.</p>
			</section>
		</div>
	);
}

function ProfileField({ icon: Icon, label, value }) {
	return (
		<div className="grid gap-2 py-4 sm:grid-cols-[minmax(150px,0.6fr)_1fr] sm:items-center">
			<dt className="flex items-center gap-2 text-sm text-[#817b89]"><Icon className="h-4 w-4" aria-hidden="true" />{label}</dt>
			<dd className="text-sm font-medium text-[#30244f]">{value}</dd>
		</div>
	);
}