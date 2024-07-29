import { useState, useEffect } from 'react';
import { Product } from '../models/Product';

interface ProductFormProps {
  product?: Omit<Product, 'id'>; // Hacer que product sea opcional
  onSave: (product: Omit<Product, 'id'>) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSave }) => {
  const [formState, setFormState] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    status: 'nuevo',
  });

  useEffect(() => {
    if (product) {
      setFormState(product);
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          value={formState.name}
          onChange={e => setFormState({ ...formState, name: e.target.value })}
          required
          readOnly={!!product} // Hacer el campo inmutable si se está editando
        />
      </div>
      <div>
        <label>Precio</label>
        <input
          type="number"
          value={formState.price}
          onChange={e => setFormState({ ...formState, price: +e.target.value })}
          required
        />
      </div>
      <div>
        <label>Estado</label>
        <select
          value={formState.status}
          onChange={e => setFormState({ ...formState, status: e.target.value as 'nuevo' | 'seminuevo' | 'usado' })}
          required
        >
          <option value="nuevo">Nuevo</option>
          <option value="seminuevo">Seminuevo</option>
          <option value="usado">Usado</option>
        </select>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ProductForm;

