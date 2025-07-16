import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function PageHeader() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-4">
          <Logo />
          <h1 className="text-xl font-semibold text-foreground/80 font-headline hidden sm:block">FAQs</h1>
        </Link>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="https://app.p2p.me" target="_blank">Users</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="https://lp.p2p.me" target="_blank">Merchants</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
