import Link from "next/link";

export function FerarMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ferar-gold" x1="10" y1="8" x2="54" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE27A" />
          <stop offset="0.48" stopColor="#F5C518" />
          <stop offset="1" stopColor="#C58B00" />
        </linearGradient>
        <filter id="ferar-glow" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#F5C518" floodOpacity="0.28" />
        </filter>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="18" fill="#0F0F12" stroke="rgba(245,197,24,.32)" />
      <path filter="url(#ferar-glow)" d="M19 45V17h28v8H29v7h15v8H29v5H19Z" fill="url(#ferar-gold)" />
      <path d="M35 17h13L32 47h-13l16-30Z" fill="#F4F4F5" fillOpacity="0.08" />
      <path d="M17 48h30" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 7" />
    </svg>
  );
}

export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Ferar home">
      <FerarMark className={compact ? "h-9 w-9" : "h-11 w-11"} />
      <span className="leading-none">
        <span className="block text-lg font-black tracking-[-0.04em] text-ink sm:text-xl">
          Fe<span className="text-accent">rar</span>
        </span>
        {!compact && <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">City logistics</span>}
      </span>
    </Link>
  );
}
