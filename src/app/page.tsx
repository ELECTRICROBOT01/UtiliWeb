import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Scale } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-primary/20 rounded-lg shadow-md">
        <h1 className="text-5xl font-bold mb-4 text-primary-foreground">Bienvenido a UtiliLab</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explorando el Utilitarismo: La búsqueda de la mayor felicidad para el mayor número.
        </p>
        <div className="mt-8">
          <Image 
            src="https://placehold.co/800x400.png" 
            alt="Concepto abstracto de utilitarismo" 
            width={800} 
            height={400}
            data-ai-hint="abstract philosophy"
            className="rounded-lg mx-auto shadow-lg" 
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-primary-foreground flex items-center">
              <Lightbulb className="mr-3 h-8 w-8 text-accent-foreground" />
              ¿Qué es el Utilitarismo?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground/80 space-y-4">
            <p>
              El utilitarismo es una teoría ética que sostiene que la mejor acción es aquella que maximiza la utilidad.
              "Utilidad" se define a menudo como aquello que produce el mayor bienestar para el mayor número de personas.
              Es una forma de consecuencialismo, lo que significa que la moralidad de una acción se juzga por sus resultados.
            </p>
            <p>
              En UtiliLab, buscamos desmitificar y presentar esta influyente teoría de una manera accesible y moderna.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-4xl font-bold text-center text-primary-foreground pt-8">Principios Fundamentales</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-accent-foreground mb-2" />
              <CardTitle className="text-2xl text-primary-foreground">Mayor Felicidad</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              El objetivo es lograr la mayor felicidad o placer para el mayor número de individuos posible, minimizando el dolor.
            </CardContent>
          </Card>
          <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Scale className="h-12 w-12 mx-auto text-accent-foreground mb-2" />
              <CardTitle className="text-2xl text-primary-foreground">Consecuencialismo</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              Las acciones no son intrínsecamente buenas o malas; su valor moral depende de sus consecuencias.
            </CardContent>
          </Card>
          <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              {/* Using a generic icon for impartiality */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-accent-foreground mb-2 lucide lucide-landmark"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
              <CardTitle className="text-2xl text-primary-foreground">Imparcialidad</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              La felicidad de cada persona cuenta por igual. No hay favoritismos; se busca el bienestar general.
            </CardContent>
          </Card>
        </div>

        <h2 className="text-4xl font-bold text-center text-primary-foreground pt-8">Figuras Clave</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary-foreground">Jeremy Bentham (1748-1832)</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              Considerado el fundador del utilitarismo moderno. Propuso el "cálculo felicífico" para determinar la utilidad de las acciones.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary-foreground">John Stuart Mill (1806-1873)</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              Discípulo de Bentham, refinó la teoría distinguiendo entre placeres superiores e inferiores y enfatizando la importancia de la libertad individual.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 py-12">
        <h2 className="text-4xl font-bold text-center text-primary-foreground mb-8">Explora el Utilitarismo Visualmente</h2>
        <div style={{position: 'relative', width: '100%', height: '0', paddingTop: '70.7071%', paddingBottom: '0', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
          <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0'}}
            src="https://www.canva.com/design/DAGnCNiuGOM/GttA6FKVQJuvvcu_6KUb-Q/view?embed" allowFullScreen={true} allow="fullscreen">
          </iframe>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGnCNiuGOM&#x2F;GttA6FKVQJuvvcu_6KUb-Q&#x2F;view?utm_content=DAGnCNiuGOM&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener" className="hover:underline">
            Tríptico sobre Utilitarismo
          </a> por Diego Gomez en Canva.
        </p>
      </section>

      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6 text-primary-foreground">Explora Nuestro Merchandising</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Lleva la filosofía contigo. Descubre nuestra colección de productos inspirados en el utilitarismo.
        </p>
        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/merchandise">Ver Productos</Link>
        </Button>
      </section>
    </div>
  );
}
