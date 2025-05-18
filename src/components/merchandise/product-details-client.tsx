"use client";

import type { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product.sizes ? product.sizes[0] : undefined);

  const handleBuyClick = () => {
    toast({
      title: "¡Gracias por tu interés!",
      description: `Has intentado "comprar" ${product.name}${selectedSize ? ` (Talla: ${selectedSize})` : ''}. Esta es solo una demostración.`,
      variant: "default",
    });
  };

  return (
    <div className="space-y-6">
      {product.sizes && product.sizes.length > 0 && (
        <div>
          <label htmlFor="size-select" className="block text-sm font-medium text-muted-foreground mb-1">
            Selecciona la talla:
          </label>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger id="size-select" className="w-full md:w-1/2">
              <SelectValue placeholder="Elige una talla" />
            </SelectTrigger>
            <SelectContent>
              {product.sizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      <Button 
        size="lg" 
        className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90" 
        onClick={handleBuyClick}
        aria-label={`Comprar ${product.name}`}
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Comprar (Simulación)
      </Button>
    </div>
  );
}
