import { Product } from '../models/Product';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  onDelete: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Estado: {product.status}</p>
      <Link href={`/edit-product/${product.id}`}>Editar</Link>
      <button onClick={() => onDelete(product.id)}>Eliminar</button>
    </div>
  );
};

export default ProductCard;
