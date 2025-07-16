import Link from "next/link";

export function PageFooter() {
  return (
    <footer className="mt-auto border-t bg-card py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} P2P.me. All rights reserved.</p>
        <div className="flex items-center gap-4">
            <Link href="https://app.p2p.lol/" className="hover:text-primary" target="_blank">User App</Link>
            <Link href="https://app.p2p.me/" className="hover:text-primary" target="_blank">P2P.me App</Link>
            <Link href="https://lp.p2p.me/" className="hover:text-primary" target="_blank">Merchant Page</Link>
        </div>
      </div>
    </footer>
  );
}
