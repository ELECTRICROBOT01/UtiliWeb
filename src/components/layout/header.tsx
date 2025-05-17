import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react'; // Using Sparkles as a generic logo icon

export default function Header() {
  return (
    <header className="bg-sidebar-accent shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-card-foreground hover:text-card-foreground/80 transition-colors">
          <Sparkles className="h-8 w-8 text-card-foreground" />
          <span>UtiliLab</span>
        </Link>
        <nav className="space-x-2 sm:space-x-4">
          <Button variant="outline" asChild className="shadow-md border-foreground">
            <Link href="/">Inicio</Link>
          </Button>
          <Button variant="outline" asChild className="shadow-md border-foreground">
            <Link href="/merchandise">Merchandising</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
