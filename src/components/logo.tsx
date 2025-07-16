import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <path d="M11.5385 4H4V28H11.5385V4Z" fill="#A855F7" />
        <path
          d="M11.5385 4H19.0769L28 16L19.0769 28H11.5385L20.4615 16L11.5385 4Z"
          fill="#7C3AED"
        />
        <path d="M11.5385 11.5V20.5L15.3077 16L11.5385 11.5Z" fill="#9333EA" />
      </svg>
      <span className="font-headline text-3xl font-bold tracking-tight text-neutral-200">
        P2P.ME
      </span>
    </div>
  );
}
