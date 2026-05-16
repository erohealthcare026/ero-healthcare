import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-border bg-white p-6 transition-all duration-300",
                hover && "hover:shadow-xl hover:-translate-y-1 hover:border-primary/20",
                className
            )}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn("text-muted", className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn("mt-6", className)}>{children}</div>;
}
