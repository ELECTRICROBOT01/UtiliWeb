import ProductCard from '@/components/merchandise/product-card';
import { products } from '@/lib/products';
import { Separator } from '@/components/ui/separator';

export default function MerchandisePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Merchandising UtiliLab</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Encuentra productos únicos para expresar tu aprecio por la ética utilitarista.
        </p>
      </section>
      <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
