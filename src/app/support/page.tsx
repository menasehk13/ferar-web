import Link from "next/link";
import { PageHero } from "@/components/Sections";
import { Card, PageShell } from "@/components/Site";

export default function SupportPage() {
  return <PageShell><PageHero badge="Support" title="Need Ferar support or a demo?" text="Use this page as the public contact and onboarding surface for customers, riders, businesses, and operators." /><section className="bg-[#09090A] py-20"><div className="mx-auto grid max-w-5xl gap-5 px-5 sm:px-8 md:grid-cols-2"><Card><h2 className="text-2xl font-black text-ink">Operations dashboard</h2><p className="mt-4 text-sm leading-7 text-muted">Open the live admin dashboard for internal operations and monitoring.</p><Link className="mt-6 inline-flex rounded-2xl bg-accent px-5 py-3 text-sm font-black text-accent-ink" href="https://feraradmin.tagcodi.com">Open admin</Link></Card><Card><h2 className="text-2xl font-black text-ink">API health</h2><p className="mt-4 text-sm leading-7 text-muted">Check the production API health endpoint and platform readiness.</p><Link className="mt-6 inline-flex rounded-2xl border border-white/10 px-5 py-3 text-sm font-black text-ink" href="https://ferarapi.tagcodi.com/api/v1/health">Check API</Link></Card></div></section></PageShell>;
}
