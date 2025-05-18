import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 space-y-6">
      <AlertTriangle className="h-24 w-24 text-destructive" />
      <h1 className="text-4xl font-bold text-foreground">Producto no Encontrado</h1>
      <p className="text-lg text-muted-foreground max-w-md">
        Lo sentimos, no pudimos encontrar el producto que estás buscando.
        Puede que haya sido removido o el enlace sea incorrecto.
      </p>
      <div className="flex space-x-4">
        <Button asChild variant="default">
          <Link href="/merchandise">Ver todo el Merchandising</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Ir a la Página Principal</Link>
        </Button>
      </div>
    </div>
  );
}
