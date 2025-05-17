export default function Footer() {
  return (
    <footer className="bg-muted/50 text-muted-foreground py-6 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} UtiliLab. Todos los derechos reservados (demostración).</p>
        <p>Un proyecto de filosofía.</p>
      </div>
    </footer>
  );
}
