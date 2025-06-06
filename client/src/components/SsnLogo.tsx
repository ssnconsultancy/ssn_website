export default function SsnLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className={className}
      role="img"
      aria-label="SSN Consultancy Logo"
    >
      <g>
        {/* Document icon */}
        <path
          d="M220 190H90c-10 0-20-10-20-20V80c0-10 10-20 20-20h100l50 50v60c0 10-10 20-20 20z"
          fill="#1a2530"
        />
        <rect x="100" y="100" width="100" height="10" rx="5" fill="#1a2530" />
        <rect x="100" y="120" width="80" height="10" rx="5" fill="#1a2530" />
        <rect x="100" y="140" width="90" height="10" rx="5" fill="#1a2530" />

        {/* Cloud icon */}
        <path
          d="M300 100c-25 0-45 20-45 45 0 5 0 10 5 15h-15c-20 0-35 15-35 35s15 35 35 35h90c20 0 35-15 35-35 0-15-10-30-25-35 0-35-20-60-45-60z"
          fill="#1ea195"
        />

        {/* Bar chart */}
        <rect x="250" y="180" width="20" height="30" rx="2" fill="#1ea195" />
        <rect x="280" y="160" width="20" height="50" rx="2" fill="#1ea195" />
        <rect x="310" y="140" width="20" height="70" rx="2" fill="#1ea195" />

        {/* Lightning bolt */}
        <path
          d="M230 90l-60 100h40l-20 80 90-110h-50l30-70z"
          fill="#ff3c1f"
        />

        {/* Shield with checkmark */}
        <path
          d="M390 100c-30 0-60 10-60 10s-30-10-60-10c0 70 20 110 60 130 40-20 60-60 60-130z"
          fill="#1a2530"
        />
        <path
          d="M360 150l-15 15-15-15-10 10 25 25 25-25z"
          fill="white"
        />

        {/* SSN text */}
        <path
          d="M120 280c15-5 25-15 25-30 0-20-15-35-40-35s-40 15-40 35h25c0-5 5-10 15-10s15 5 15 10-5 10-15 10h-5v20h5c10 0 15 5 15 10s-5 10-15 10-15-5-15-10h-25c0 20 15 35 40 35s40-15 40-35c0-15-10-25-25-30z"
          fill="#1a2530"
        />
        <path
          d="M200 280c15-5 25-15 25-30 0-20-15-35-40-35s-40 15-40 35h25c0-5 5-10 15-10s15 5 15 10-5 10-15 10h-5v20h5c10 0 15 5 15 10s-5 10-15 10-15-5-15-10h-25c0 20 15 35 40 35s40-15 40-35c0-15-10-25-25-30z"
          fill="#1a2530"
        />
        <path
          d="M260 215h-25l-30 100h25l5-20h25l5 20h25l-30-100zm-20 60l10-30 10 30h-20z"
          fill="#1a2530"
        />

        {/* CONSULTANCY text */}
        <path
          d="M100 340c-10 0-20 5-25 15-5 5-5 15-5 20s0 15 5 20c5 10 15 15 25 15 15 0 25-10 30-20h-10c-5 5-10 10-20 10-5 0-10-5-15-10-5-5-5-10-5-15s0-10 5-15c5-5 10-10 15-10 10 0 15 5 20 10h10c-5-10-15-20-30-20z"
          fill="#1ea195"
        />
        <circle cx="150" cy="350" r="10" fill="#1ea195" />
        <path
          d="M195 340h-10c-20 0-30 15-30 35s10 35 30 35h10c20 0 30-15 30-35s-10-35-30-35zm0 60h-10c-10 0-20-10-20-25s10-25 20-25h10c10 0 20 10 20 25s-10 25-20 25z"
          fill="#1ea195"
        />
        <path
          d="M280 340h-40v70h10v-30h30c15 0 20-10 20-20s-5-20-20-20zm0 30h-30v-20h30c10 0 10 5 10 10s0 10-10 10z"
          fill="#1ea195"
        />
        <path
          d="M320 340h-10v70h10c20 0 30-15 30-35s-10-35-30-35zm0 60h-0v-50h0c10 0 20 10 20 25s-10 25-20 25z"
          fill="#1ea195"
        />
        <rect x="360" y="340" width="10" height="70" fill="#1ea195" />
        <path
          d="M410 340h-30v70h10v-25h10l15 25h15l-15-25c10 0 15-10 15-20 0-15-5-25-20-25zm0 35h-20v-25h20c5 0 10 5 10 10 0 10-5 15-10 15z"
          fill="#1ea195"
        />
        <path
          d="M440 340h10l20 50v-50h10v70h-10l-20-50v50h-10z"
          fill="#1ea195"
        />
        <path
          d="M500 340c-10 0-15 5-15 15v40c0 10 5 15 15 15s15-5 15-15v-40c0-10-5-15-15-15zm5 55c0 5 0 5-5 5s-5 0-5-5v-40c0-5 0-5 5-5s5 0 5 5z"
          fill="#1ea195"
        />
      </g>
    </svg>
  );
}
