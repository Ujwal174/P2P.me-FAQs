import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo.png"
        alt="P2P.me Logo"
        width={32}
        height={32}
        className="h-8 w-8"
        unoptimized
      />
      <span className="font-headline text-3xl font-bold tracking-tight text-white">
        P2P.ME
      </span>
    </div>
  );
}
