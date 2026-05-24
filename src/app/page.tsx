"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ─── inline SVG icons ───────────────────────────────────────────────────── */
const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconBolt = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconMap = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
);
const IconCard = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);
const IconStar = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconPhone = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);

/* ─── data ───────────────────────────────────────────────────────────────── */
const features = [
  { icon: <IconBolt />, title: "Instant Booking", desc: "Get matched with a nearby driver in seconds. No waiting, no hassle." },
  { icon: <IconShield />, title: "Safe & Verified", desc: "Every driver is background-checked, licensed, and rated by the community." },
  { icon: <IconMap />, title: "Live Tracking", desc: "Follow your ride in real-time and share your trip with loved ones." },
  { icon: <IconCard />, title: "Easy Payments", desc: "Pay with cash or card. Split fares, get receipts, stay in control." },
  { icon: <IconStar />, title: "Top-Rated Drivers", desc: "Rider reviews surface only the best drivers so every trip is great." },
  { icon: <IconPhone />, title: "Always Connected", desc: "In-app chat and call keep you connected without sharing your number." },
];

const steps = [
  { num: "01", title: "Open the app", desc: "Download Ferar and sign in with your phone number in seconds." },
  { num: "02", title: "Set destination", desc: "Enter where you're going and see the fare upfront — no surprises." },
  { num: "03", title: "Match & ride", desc: "Your driver arrives, you track them live, hop in, and enjoy the ride." },
  { num: "04", title: "Pay & rate", desc: "Payment is handled in-app. Leave a quick rating to keep quality high." },
];

/* ─── NavBar ─────────────────────────────────────────────────────────────── */
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,11,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1C1C20" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" aria-label="Ferar home" className="inline-flex items-center">
          <Image src="/ferar-logo.png" alt="Ferar" width={120} height={80} priority className="h-10 w-auto object-contain" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "#8A8A92" }}>
          <a href="#features" className="hover:text-[#F4F4F5] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[#F4F4F5] transition-colors">How It Works</a>
          <a href="#download" className="hover:text-[#F4F4F5] transition-colors">Download</a>
        </div>
        <a
          href="#download"
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
          style={{ background: "#F5C518", color: "#0A0A0B" }}
        >
          Get the App
        </a>
      </div>
    </nav>
  );
}

/* ─── PhoneMockup ────────────────────────────────────────────────────────── */
function PhoneMockup() {
  return (
    <div className="relative float" style={{ width: 260, height: 520 }}>
      <div className="absolute inset-0 rounded-[52px] pulse-ring" style={{ background: "rgba(245,197,24,0.15)", margin: -24 }} />
      <div className="absolute inset-0 rounded-[52px] pulse-ring" style={{ background: "rgba(245,197,24,0.08)", margin: -48, animationDelay: "0.7s" }} />
      <div
        className="relative w-full h-full rounded-[48px] overflow-hidden"
        style={{ background: "#0F0F12", border: "2px solid #1C1C20", boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 rounded-b-2xl" style={{ background: "#0A0A0B" }} />
        <div className="absolute inset-0 flex flex-col p-5 pt-12">
          <div className="flex justify-between items-center text-xs mb-5" style={{ color: "#8A8A92" }}>
            <span>9:41</span><span>●●●</span>
          </div>
          <div className="flex-1 rounded-3xl relative overflow-hidden mb-4" style={{ background: "#141418" }}>
            <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
              {[20, 40, 60, 80].map((y) => <line key={`h${y}`} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="#8A8A92" strokeWidth="0.5" />)}
              {[20, 40, 60, 80].map((x) => <line key={`v${x}`} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%" stroke="#8A8A92" strokeWidth="0.5" />)}
            </svg>
            <svg className="absolute inset-0 w-full h-full">
              <path d="M40 160 Q80 80 140 60" stroke="#F5C518" strokeWidth="2.5" strokeDasharray="6 3" fill="none" strokeLinecap="round" />
              <circle cx="40" cy="160" r="5" fill="#F5C518" />
              <circle cx="140" cy="60" r="5" fill="#F4F4F5" />
            </svg>
            <div className="absolute" style={{ left: 68, top: 90, transform: "rotate(-30deg)" }}>
              <div className="w-7 h-5 rounded-sm flex items-center justify-center text-xs" style={{ background: "#F5C518", color: "#0A0A0B" }}>🚗</div>
            </div>
          </div>
          <div className="rounded-2xl p-3" style={{ background: "#18181C" }}>
            <div className="text-xs font-semibold mb-1" style={{ color: "#F5C518" }}>Driver arriving</div>
            <div className="text-sm font-bold mb-2" style={{ color: "#F4F4F5" }}>2 min · 0.8 km away</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "#F5C518", color: "#0A0A0B" }}>A</div>
                <div>
                  <div className="text-xs font-medium" style={{ color: "#F4F4F5" }}>Abebe K.</div>
                  <div className="text-xs" style={{ color: "#8A8A92" }}>★ 4.9</div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#F5C518" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A0A0B" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.6 2.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── FeatureCard ────────────────────────────────────────────────────────── */
function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="rounded-2xl p-6 transition-all duration-500"
      style={{
        background: "#0F0F12",
        border: "1px solid #1C1C20",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(245,197,24,0.12)", color: "#F5C518" }}>
        {icon}
      </div>
      <h3 className="text-base font-semibold mb-2" style={{ color: "#F4F4F5" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#8A8A92" }}>{desc}</p>
    </div>
  );
}

/* ─── StepItem ───────────────────────────────────────────────────────────── */
function StepItem({ num, title, desc, last }: { num: string; title: string; desc: string; last?: boolean }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{ background: "#F5C518", color: "#0A0A0B" }}>
          {num}
        </div>
        {!last && <div className="w-px flex-1 mt-3" style={{ background: "#1C1C20" }} />}
      </div>
      <div className={last ? "" : "pb-10"}>
        <h3 className="text-lg font-semibold mb-1" style={{ color: "#F4F4F5" }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#8A8A92" }}>{desc}</p>
      </div>
    </div>
  );
}

/* ─── page ───────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <NavBar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#0A0A0B" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(245,197,24,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 30% 30%, rgba(245,197,24,0.04) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "rgba(245,197,24,0.12)", color: "#F5C518", border: "1px solid rgba(245,197,24,0.25)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#F5C518" }} />
              Now available in Ethiopia
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-none tracking-tight mb-6" style={{ color: "#F4F4F5" }}>
              Ride with<br /><span style={{ color: "#F5C518" }}>Confidence.</span>
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0" style={{ color: "#8A8A92" }}>
              Ferar connects you with trusted, verified drivers in seconds. Safe journeys, transparent fares, and real-time tracking — all in one app.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#download" className="flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-100" style={{ background: "#F5C518", color: "#0A0A0B" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.39.07 2.35.76 3.16.78 1.2-.25 2.35-1 3.56-.84 1.5.19 2.63.89 3.37 2.21-3.07 1.84-2.56 5.91.44 7.1-.51 1.38-1.19 2.75-2.53 3.61zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                App Store
              </a>
              <a href="#download" className="flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-100" style={{ background: "#0F0F12", color: "#F4F4F5", border: "1.5px solid #1C1C20" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 0 2.29-.19l.07-.06 12.09-6.98-2.64-2.64L3.18 23.76zm16.63-10.75L17.7 11l-2.69 2.69 2.69 2.69 2.14-1.24a1.55 1.55 0 0 0 0-2.69zM3.19.24a2 2 0 0 0-.19.95v21.62a2 2 0 0 0 .19.95l.1.09 12.1-12.1v-.29L3.3.15zm11.01 10.87L14.86 11l-2.69-2.69 2.64-2.64 2.89 1.67-3.5 3.77z"/></svg>
                Google Play
              </a>
            </div>
            <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
              {[["10k+", "Active riders"], ["500+", "Verified drivers"], ["4.8★", "App rating"]].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold" style={{ color: "#F4F4F5" }}>{val}</div>
                  <div className="text-xs" style={{ color: "#8A8A92" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <PhoneMockup />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs" style={{ color: "#8A8A92" }}>Scroll</span>
          <div className="w-px h-10 animate-bounce" style={{ background: "#8A8A92" }} />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24" style={{ background: "#0A0A0B" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#F5C518" }}>Why Ferar</p>
            <h2 className="text-4xl font-bold" style={{ color: "#F4F4F5" }}>Everything you need for a great ride</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => <FeatureCard key={f.title} {...f} delay={i * 80} />)}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24" style={{ background: "#0F0F12" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#F5C518" }}>How It Works</p>
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#F4F4F5" }}>From tap to destination<br />in four steps</h2>
            <p className="text-base mb-12" style={{ color: "#8A8A92" }}>Ferar is designed to be the simplest, fastest way to get around.</p>
            <div>
              {steps.map((s, i) => <StepItem key={s.num} {...s} last={i === steps.length - 1} />)}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-sm rounded-3xl p-8" style={{ background: "#0A0A0B", border: "1px solid #1C1C20" }}>
              <div className="text-center mb-8">
                <div className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-4 text-2xl" style={{ background: "rgba(245,197,24,0.12)" }}>🚖</div>
                <h3 className="font-bold text-xl mb-1" style={{ color: "#F4F4F5" }}>Are you a driver?</h3>
                <p className="text-sm" style={{ color: "#8A8A92" }}>Earn on your schedule. Set your hours, accept rides, and get paid weekly.</p>
              </div>
              {[["Weekly earnings", "ETB 8,000+"], ["Active trips today", "1,240"], ["Driver satisfaction", "97%"]].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid #1C1C20" }}>
                  <span className="text-sm" style={{ color: "#8A8A92" }}>{label}</span>
                  <span className="font-semibold text-sm" style={{ color: "#F5C518" }}>{value}</span>
                </div>
              ))}
              <a href="#download" className="mt-6 block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90" style={{ background: "#F5C518", color: "#0A0A0B" }}>
                Drive with Ferar →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-28 relative overflow-hidden" style={{ background: "#0A0A0B" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,197,24,0.06) 0%, transparent 70%)" }} />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex w-20 h-20 rounded-3xl items-center justify-center text-4xl mb-8" style={{ background: "rgba(245,197,24,0.12)", border: "1px solid rgba(245,197,24,0.2)" }}>🚀</div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: "#F4F4F5" }}>
            Download Ferar<br /><span style={{ color: "#F5C518" }}>for free today</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "#8A8A92" }}>Join thousands of riders who trust Ferar every day. Available on iOS and Android.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 hover:scale-105" style={{ background: "#F5C518", color: "#0A0A0B" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.39.07 2.35.76 3.16.78 1.2-.25 2.35-1 3.56-.84 1.5.19 2.63.89 3.37 2.21-3.07 1.84-2.56 5.91.44 7.1-.51 1.38-1.19 2.75-2.53 3.61zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              Download on App Store
            </a>
            <a href="#" className="flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 hover:scale-105" style={{ background: "#0F0F12", color: "#F4F4F5", border: "1.5px solid #1C1C20" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 0 2.29-.19l.07-.06 12.09-6.98-2.64-2.64L3.18 23.76zm16.63-10.75L17.7 11l-2.69 2.69 2.69 2.69 2.14-1.24a1.55 1.55 0 0 0 0-2.69zM3.19.24a2 2 0 0 0-.19.95v21.62a2 2 0 0 0 .19.95l.1.09 12.1-12.1v-.29L3.3.15zm11.01 10.87L14.86 11l-2.69-2.69 2.64-2.64 2.89 1.67-3.5 3.77z"/></svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ background: "#0F0F12", borderTop: "1px solid #1C1C20" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src="/ferar-logo.png" alt="Ferar" width={108} height={72} className="h-9 w-auto object-contain" />
          <div className="flex gap-6 text-sm" style={{ color: "#8A8A92" }}>
            <a href="#" className="hover:text-[#F4F4F5] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F4F4F5] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#F4F4F5] transition-colors">Support</a>
          </div>
          <span className="text-xs" style={{ color: "#8A8A92" }}>© {new Date().getFullYear()} Ferar. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
