import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all active:scale-95",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg transition-all active:scale-95",
            outline: "border-2 border-primary text-primary hover:bg-primary/10 transition-all",
            ghost: "text-primary hover:bg-primary/5 transition-all",
        };

        const sizes = {
            sm: "px-4 text-xs",
            md: "px-6 text-sm font-medium",
            lg: "px-8 text-base font-semibold",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer h-[50px]",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
