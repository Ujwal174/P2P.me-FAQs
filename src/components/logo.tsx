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
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#7C3AED', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M13.3333 5.33331H8C6.52724 5.33331 5.33333 6.52722 5.33333 7.99998V24C5.33333 25.4727 6.52724 26.6666 8 26.6666H13.3333"
          stroke="url(#grad1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.3333 5.33331H24C25.4728 5.33331 26.6667 6.52722 26.6667 7.99998V13.3333"
          stroke="url(#grad1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 13.3333H21.3333C22.7836 13.3333 23.9482 14.3929 24.0754 15.8249L24.6667 22.5333C24.819 24.2709 23.4475 25.7533 21.6931 25.7533H20.6667C19.2164 25.7533 18.0518 24.6071 17.9246 23.1751L17.3333 16.4666C17.181 14.729 15.8122 13.3333 14.0625 13.3333H13.3333V13.3333Z"
          fill="url(#grad1)"
        />
      </svg>
      <span className="font-headline text-3xl font-bold tracking-tight text-white">
        P2P.ME
      </span>
    </div>
  );
}
