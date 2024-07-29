export interface Product {
  id: string;
  name: string;
  price: number;
  status: 'nuevo' | 'seminuevo' | 'usado';
}
