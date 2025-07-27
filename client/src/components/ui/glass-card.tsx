import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  hoverEffect?: boolean;
  gradientBorder?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = false, gradientBorder = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "bg-card-bg backdrop-blur-md border border-white/10 shadow-md",
          hoverEffect && 
            "transform transition duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-neon-blue/20",
          gradientBorder && "gradient-border",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
