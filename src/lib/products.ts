export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  imageUrl: string;
  sizes?: string[];
  category: 'Camiseta' | 'Taza' | 'Sudadera';
  aiHint: string;
}
// En lib/products.ts
export const getAllProductIds = (): string[] => {
  return products.map(product => product.id); // Extraemos solo los IDs
};
export const products: Product[] = [
  {
    id: 'camiseta-el-mayor-bien',
    name: 'Camiseta "El Mayor Bien"',
    description: 'Viste el principio fundamental del utilitarismo.',
    longDescription: 'Esta camiseta de algodón 100% presenta un diseño minimalista con el lema "El Mayor Bien para el Mayor Número". Ideal para debates filosóficos o para tu día a día. Disponible en varias tallas.',
    price: '€24.99',
    imageUrl: 'https://placehold.co/600x600.png',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Camiseta',
    aiHint: 'tshirt philosophy'
  },
  {
    id: 'taza-calculo-feliz',
    name: 'Taza "Cálculo Feliz"',
    description: 'Empieza tu día con una dosis de utilitarismo.',
    longDescription: 'Disfruta de tu bebida favorita en esta taza de cerámica resistente. Con un diseño que evoca el "cálculo de la felicidad" de Bentham, es perfecta para reflexionar sobre las consecuencias de tus acciones. Capacidad: 350ml.',
    price: '€15.50',
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Taza',
    aiHint: 'mug philosophy'
  },
  {
    id: 'sudadera-etica-practica',
    name: 'Sudadera "Ética Práctica"',
    description: 'Comodidad y principios éticos en una prenda.',
    longDescription: 'Mantente abrigado y promueve la ética utilitarista con esta cómoda sudadera. Fabricada con una mezcla de algodón y poliéster, es perfecta para cualquier ocasión. Diseño sutil y moderno.',
    price: '€39.99',
    imageUrl: 'https://placehold.co/600x600.png',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Sudadera',
    aiHint: 'hoodie philosophy'
  },
  {
    id: 'camiseta-consecuencialista',
    name: 'Camiseta "Consecuencialista"',
    description: 'Las acciones se juzgan por sus resultados.',
    longDescription: 'Una camiseta que declara tu afinidad por el consecuencialismo, un pilar del utilitarismo. Fabricada con materiales de alta calidad para un confort duradero. Ideal para iniciar conversaciones.',
    price: '€22.99',
    imageUrl: 'https://placehold.co/600x600.png',
    sizes: ['XS', 'S', 'M', 'L'],
    category: 'Camiseta',
    aiHint: 'tshirt ethics'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
