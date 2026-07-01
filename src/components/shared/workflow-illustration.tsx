export function WorkflowIllustration() {
  return (
    <svg viewBox="0 0 520 360" className="h-auto w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#0B2F6B" />
          <stop offset="1" stopColor="#1e4ea0" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#F57C00" />
          <stop offset="1" stopColor="#ffb260" />
        </linearGradient>
      </defs>
      <rect x="20" y="30" rx="18" width="220" height="140" fill="url(#g1)" />
      <rect x="40" y="50" rx="6" width="180" height="10" fill="white" opacity=".25" />
      <rect x="40" y="70" rx="6" width="120" height="10" fill="white" opacity=".18" />
      <polyline
        points="40,150 80,120 120,135 160,95 200,110 220,80"
        fill="none"
        stroke="#F57C00"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="270" y="60" rx="18" width="230" height="90" fill="#F8FAFC" stroke="#E5E7EB" />
      <circle cx="305" cy="105" r="18" fill="url(#g2)" />
      <rect x="335" y="88" width="140" height="10" rx="5" fill="#0B2F6B" opacity=".7" />
      <rect x="335" y="106" width="100" height="8" rx="4" fill="#0B2F6B" opacity=".25" />
      <rect x="20" y="200" rx="18" width="150" height="130" fill="#F8FAFC" stroke="#E5E7EB" />
      <rect x="40" y="220" width="40" height="80" fill="url(#g1)" rx="4" />
      <rect x="90" y="240" width="40" height="60" fill="url(#g2)" rx="4" />
      <rect x="190" y="200" rx="18" width="310" height="130" fill="white" stroke="#E5E7EB" />
      <rect x="210" y="220" width="140" height="14" rx="6" fill="#0B2F6B" />
      <rect x="210" y="244" width="270" height="8" rx="4" fill="#E5E7EB" />
      <rect x="210" y="260" width="220" height="8" rx="4" fill="#E5E7EB" />
      <rect x="210" y="290" width="120" height="28" rx="14" fill="url(#g2)" />
    </svg>
  );
}
