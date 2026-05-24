import Link from "next/link";
import { BrandLockup } from "./Brand";

const nav = [
  { href: "/", label: "Home" },
  { href: "/customer", label: "Customers" },
  { href: "/rider", label: "Riders" },
  { href: "/business", label: "Business" },
  { href: "/safety", label: "Safety" },
  { href: "/support", label: "Support" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-canvas/82 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <BrandLockup compact />
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-muted transition hover:bg-white/[0.06] hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="https://feraradmin.tagcodi.com" className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent/50 hover:text-accent sm:inline-flex">
            Admin
          </Link>
          <Link href="/support" className="rounded-full bg-accent px-5 py-2 text-sm font-black text-accent-ink shadow-[0_0_30px_rgba(245,197,24,.22)] transition hover:scale-[1.02]">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070708]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <BrandLockup />
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
            Ferar is a delivery and mobility platform built for Ethiopia: fast dispatch, live tracking, rider operations, and reliable city logistics.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterColumn title="Product" links={[['Customers','/customer'],['Riders','/rider'],['Business','/business']]} />
          <FooterColumn title="Trust" links={[['Safety','/safety'],['Support','/support'],['API status','https://ferarapi.tagcodi.com/api/v1/health']]} />
          <FooterColumn title="Platforms" links={[['Admin dashboard','https://feraradmin.tagcodi.com'],['Public site','/'],['Contact','/support']]} />
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-muted">© 2026 Ferar. Built for Addis Ababa and beyond.</div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[0.22em] text-ink">{title}</h3>
      <div className="mt-4 grid gap-3">
        {links.map(([label, href]) => (
          <Link key={label} href={href} className="text-sm text-muted transition hover:text-accent">{label}</Link>
        ))}
      </div>
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return <div className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-accent">{children}</div>;
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,.28)] ${className}`}>{children}</div>;
}
