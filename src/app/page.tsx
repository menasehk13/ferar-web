import { Hero, ProductGrid } from "@/components/Sections";
import { Card, PageShell, SectionBadge } from "@/components/Site";

const flow = ["Book", "Match", "Track", "Pay", "Review"];

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <ProductGrid />
      <section className="bg-canvas py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionBadge>How it moves</SectionBadge>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {flow.map((step, index) => (
              <Card key={step} className="relative overflow-hidden">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
                <div className="text-sm font-black text-accent">0{index + 1}</div>
                <h2 className="mt-4 text-2xl font-black text-ink">{step}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">A clean, guided step in the Ferar delivery journey.</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#09090A] py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <SectionBadge>Ready for launch</SectionBadge>
          <h2 className="mt-7 text-4xl font-black tracking-[-0.05em] text-ink sm:text-6xl">One brand across web, customer app, rider app, and operations.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">The updated logo and page system give Ferar a sharper, more premium identity while keeping the experience practical and usable.</p>
        </div>
      </section>
    </PageShell>
  );
}
