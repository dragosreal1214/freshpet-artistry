import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label?: string;
  className?: string;
  iconSize?: number;
  height?: string;
}

export function ImageFrame({ icon: Icon, label, className = "", iconSize = 48, height = "h-48" }: Props) {
  return (
    <div
      className={`relative w-full ${height} rounded-2xl border-2 border-dashed border-primary/40 flex flex-col items-center justify-center gap-2 overflow-hidden ${className}`}
      style={{ background: "linear-gradient(135deg, #E1F5EE 0%, #F0FBF7 100%)" }}
    >
      <Icon size={iconSize} className="text-primary" strokeWidth={1.5} />
      {label && (
        <span className="text-xs italic text-muted-foreground px-4 text-center">{label}</span>
      )}
    </div>
  );
}

export function DarkImageFrame({ icon: Icon, label, className = "", iconSize = 48, height = "h-48" }: Props) {
  return (
    <div
      className={`relative w-full ${height} rounded-2xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-2 overflow-hidden bg-white/5 backdrop-blur-sm ${className}`}
    >
      <Icon size={iconSize} className="text-primary" strokeWidth={1.5} />
      {label && (
        <span className="text-xs italic text-white/60 px-4 text-center">{label}</span>
      )}
    </div>
  );
}

export function MotionImageFrame(props: Props & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: props.delay ?? 0 }}
    >
      <ImageFrame {...props} />
    </motion.div>
  );
}
