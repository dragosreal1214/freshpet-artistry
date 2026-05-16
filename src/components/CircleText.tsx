interface Props {
  size?: number;
  text: string;
  className?: string;
  color?: string;
}

// Curved/circular text label, used as a decorative seal.
export function CircleText({ size = 140, text, className = "", color = "#1D9E75" }: Props) {
  const r = size / 2 - 10;
  const id = `cp-${text.replace(/\s/g, "").slice(0, 6)}-${size}`;
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="animate-spin-slow w-full h-full">
        <defs>
          <path id={id} d={`M ${size / 2}, ${size / 2} m -${r}, 0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`} />
        </defs>
        <text fill={color} fontSize="10" fontFamily="Inter" letterSpacing="3.5">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
    </div>
  );
}
