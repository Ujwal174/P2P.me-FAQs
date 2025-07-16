import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("font-headline text-3xl font-bold tracking-tight", className)}>
      <span className="text-primary">P2P</span>
      <span className="text-accent" style={{ color: '#D0BFFF' }}>.me</span>
    </div>
  );
}
