const sizeStyles: Record<"sm" | "md" | "lg", string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
};

export default function SlingshotLogo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const px = { sm: 18, md: 24, lg: 30 }[size];
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width={px} height={px} viewBox="0 0 48 48" aria-hidden="true">
        <g fill="none" stroke="#D97706" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 43 C 16 31 14 24 24 22 C 33 20 38 16 44 9" />
          <path d="M44 9 L38.2 10.4" />
          <path d="M44 9 L42.3 14.8" />
        </g>
        <circle cx="28" cy="30" r="4" fill="#D97706" />
      </svg>
      <span className={`font-sans font-extrabold tracking-tight text-[#D97706] ${sizeStyles[size]}`}>
        slingshot
      </span>
    </span>
  );
}
