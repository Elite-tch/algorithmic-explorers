import { Check, ReceiptText } from "lucide-react";

const payments = [
	{ course: "Backend Development · Cohort 3", reference: "AE-2026-1002", amount: "₦100,000", date: "October 2, 2026", status: "Successful" },
];

export default function PaymentsPage() {
	return (
		<div className="space-y-7">
			<header>
				<p className="text-sm font-medium text-[#817b89]">Account</p>
				<h1 className="mt-1 text-2xl font-bold text-[#30244f] sm:text-3xl">Payment history</h1>
				<p className="mt-2 text-sm text-[#706a78]">A record of your enrollment payments and transaction status.</p>
			</header>
			<section className="overflow-hidden rounded-xl border border-[#30244f]/10 bg-white" aria-label="Payment transactions">
				<div className="hidden grid-cols-[minmax(0,1fr)_140px_130px_120px] gap-4 border-b border-[#30244f]/10 bg-[#f7f6f8] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#817b89] md:grid"><span>Program</span><span>Amount</span><span>Date</span><span>Status</span></div>
				{payments.map((payment) => (
					<article key={payment.reference} className="grid gap-3 p-5 md:grid-cols-[minmax(0,1fr)_140px_130px_120px] md:items-center md:gap-4">
						<div className="flex items-start gap-3"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#f6ab8c]/30 text-[#30244f]"><ReceiptText className="h-5 w-5" aria-hidden="true" /></div><div><h2 className="text-sm font-semibold text-[#30244f]">{payment.course}</h2><p className="mt-1 text-xs text-[#817b89]">Ref. {payment.reference}</p></div></div>
						<p className="text-sm font-semibold text-[#30244f]">{payment.amount}</p><p className="text-sm text-[#625c6d]">{payment.date}</p>
						<span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#e8f4ed] px-2.5 py-1 text-xs font-semibold text-[#28734b]"><Check className="h-3.5 w-3.5" aria-hidden="true" />{payment.status}</span>
					</article>
				))}
			</section>
		</div>
	);
}