"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-sidebar-accent shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-card-foreground hover:text-card-foreground/80 transition-colors">
          <Sparkles className="h-8 w-8 text-card-foreground" />
          <span>UtiliLab</span>
        </Link>
        <nav className="space-x-2 sm:space-x-4">
          {pathname !== '/' && (
            <Button variant="outline" asChild className="shadow-md border-foreground rounded-xl">
              <Link href="/">Inicio</Link>
            </Button>
          )}
          {pathname !== '/merchandise' && (
            <Button variant="outline" asChild className="shadow-md border-foreground rounded-xl">
              <Link href="/merchandise">Merchandising</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
