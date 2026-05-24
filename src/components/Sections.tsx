import Link from "next/link";
import { Card, SectionBadge } from "./Site";

export const productCards = [
  { title: "Customer app", href: "/customer", text: "Book deliveries, track riders live, manage wallet payments, and receive proof of delivery." },
  { title: "Rider app", href: "/rider", text: "Accept jobs, share live location, manage earnings, complete delivery flows, and stay online safely." },
  { title: "Business tools", href: "/business", text: "Operate fleets, dispatch orders, monitor service quality, and manage delivery demand from one dashboard." },
  { title: "Safety layer", href: "/safety", text: "Verified users, audit trails, SOS signals, transparent tracking, and role based operations." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(245,197,24,.18),transparent_34%),radial-gradient(circle_at_80%_35%,rgba(245,197,24,.08),transparent_32%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <SectionBadge>Ferar public launch</SectionBadge>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.07em] text-ink sm:text-7xl lg:text-8xl">
            City delivery with a sharper edge.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            A polished logistics platform for customers, riders, and operators. Ferar brings booking, dispatch, tracking, payments, and safety into one fast experience.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/customer" className="rounded-2xl bg-accent px-7 py-4 text-sm font-black text-accent-ink shadow-[0_18px_60px_rgba(245,197,24,.25)] transition hover:scale-[1.02]">Explore the app</Link>
            <Link href="/business" className="rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-black text-ink transition hover:border-accent/50 hover:text-accent">For businesses</Link>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[['Live','tracking'],['13','core tables'],['24/7','ops ready']].map(([a,b]) => <div key={a} className="rounded-2xl border border-white/10 bg-black/20 p-4"><div className="text-2xl font-black text-ink">{a}</div><div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">{b}</div></div>)}
          </div>
        </div>
        <FerarDevice />
      </div>
    </section>
  );
}

export function FerarDevice() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -inset-10 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative rounded-[2.5rem] border border-white/10 bg-[#0D0D10] p-5 shadow-[0_40px_120px_rgba(0,0,0,.55)]">
        <div className="rounded-[2rem] border border-white/10 bg-[#121216] p-5">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-black text-accent">ACTIVE DELIVERY</span>
            <span className="text-xs text-muted">Addis Ababa</span>
          </div>
          <div className="mt-6 rounded-[1.5rem] bg-[#09090A] p-4">
            <div className="relative h-64 overflow-hidden rounded-[1.2rem] border border-white/10 bg-[radial-gradient(circle_at_30%_35%,rgba(245,197,24,.18),transparent_22%),linear-gradient(135deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:100%_100%,32px_32px]">
              <div className="absolute left-12 top-40 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_8px_rgba(245,197,24,.15)]" />
              <div className="absolute right-16 top-14 h-3 w-3 rounded-full bg-ink shadow-[0_0_0_8px_rgba(255,255,255,.12)]" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 260" fill="none">
                <path d="M62 176 C112 110 170 162 224 92 C250 58 278 56 302 64" stroke="#F5C518" strokeWidth="5" strokeLinecap="round" strokeDasharray="12 12" />
              </svg>
              <div className="absolute left-[48%] top-[43%] grid h-12 w-12 place-items-center rounded-2xl bg-accent text-xl shadow-[0_16px_42px_rgba(245,197,24,.35)]">⚡</div>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MiniMetric label="ETA" value="14 min" />
            <MiniMetric label="Rider" value="Online" />
            <MiniMetric label="Payment" value="Wallet" />
            <MiniMetric label="Status" value="Transit" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><div className="text-xs uppercase tracking-[0.2em] text-muted">{label}</div><div className="mt-1 text-lg font-black text-ink">{value}</div></div>;
}

export function ProductGrid() {
  return (
    <section className="bg-[#09090A] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionBadge>Complete platform</SectionBadge>
        <div className="mt-6 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <h2 className="text-4xl font-black tracking-[-0.05em] text-ink sm:text-6xl">Every page, every role, one connected system.</h2>
          <p className="text-lg leading-8 text-muted">The public site now includes dedicated pages for customers, riders, businesses, safety, and support, so the whole Ferar product story is covered.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productCards.map((card) => (
            <Link key={card.href} href={card.href} className="group block">
              <Card className="h-full transition group-hover:-translate-y-1 group-hover:border-accent/40">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-xl font-black text-accent-ink">F</div>
                <h3 className="mt-6 text-xl font-black text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{card.text}</p>
                <div className="mt-6 text-sm font-black text-accent">Open page →</div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageHero({ badge, title, text }: { badge: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(245,197,24,.14),transparent_34%)]" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <SectionBadge>{badge}</SectionBadge>
        <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.06em] text-ink sm:text-7xl">{title}</h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted">{text}</p>
      </div>
    </section>
  );
}

export function FeatureList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <section className="bg-[#09090A] py-20">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-3">
        {items.map((item) => <Card key={item.title}><h2 className="text-2xl font-black text-ink">{item.title}</h2><p className="mt-4 text-sm leading-7 text-muted">{item.text}</p></Card>)}
      </div>
    </section>
  );
}
