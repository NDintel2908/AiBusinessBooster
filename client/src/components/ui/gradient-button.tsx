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
      <Button
        className={cn(
          "font-medium transition-all duration-300 rounded-lg font-primary",
          variant === "primary" 
            ? "bg-gradient-to-r from-neon-blue to-electric-purple text-black hover:shadow-lg hover:shadow-electric-purple/20 border-0" 
            : "border border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue/10 hover:shadow-md hover:shadow-neon-blue/10",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-base",
          animate && "animate-pulse",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };