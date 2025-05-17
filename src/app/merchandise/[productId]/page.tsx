import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById, type Product } from '@/lib/products';
import ProductDetailsClient from '@/components/merchandise/product-details-client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductById(params.productId);
  if (!product) {
    return {
      title: 'Producto no encontrado',
    };
  }
  return {
    title: `${product.name} - UtiliLab Merch`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/merchandise">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Merchandising
          </Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="aspect-square relative w-full rounded-lg overflow-hidden shadow-xl">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            data-ai-hint={product.aiHint}
            priority
          />
        </div>
        <div className="space-y-6">
          <Badge variant="secondary" className="text-sm">{product.category}</Badge>
          <h1 className="text-4xl font-bold text-foreground">{product.name}</h1>
          <p className="text-3xl font-semibold text-accent-foreground">{product.price}</p>
          
          <Separator />
          
          <div className="prose prose-lg text-foreground/80">
            <h2 className="text-xl font-semibold text-foreground mb-2">Descripción del Producto</h2>
            <p>{product.longDescription}</p>
          </div>
          
          <Separator />

          <ProductDetailsClient product={product} />
        </div>
      </div>
    </div>
  );
}
