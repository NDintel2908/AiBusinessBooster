import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  animate?: boolean;
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", size = "md", animate = false, children, ...props }, ref) => {
    return (
      <>
        {animate && (
          <style>{`
            @keyframes slow-jiggle {
              0%, 100% {
                transform: scale(1);
              }
              25% {
                transform: scale(1.02);
              }
              50% {
                transform: scale(1.05);
              }
              75% {
                transform: scale(1.02);
              }
            }
            .animate-slow-jiggle {
              animation: slow-jiggle 3s ease-in-out infinite;
            }
          `}</style>
        )}
        <Button
          className={cn(
            "font-medium transition-all duration-300 rounded-lg font-primary",
            variant === "primary" 
              ? "bg-gradient-to-r from-brand-primary to-brand-accent text-white hover:shadow-lg hover:shadow-brand-accent/20 border-0" 
              : "border border-brand-accent bg-transparent text-brand-accent hover:bg-brand-accent/10 hover:shadow-md hover:shadow-brand-accent/10",
            size === "sm" && "px-4 py-2 text-sm",
            size === "md" && "px-6 py-3 text-base",
            size === "lg" && "px-8 py-4 text-base",
            animate && "animate-slow-jiggle",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Button>
      </>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };