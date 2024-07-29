import { useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteProduct } from '../store/productSlice';
import styles from '../styles/Home.module.css';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className={styles.container}>
      <h1>Lista de Productos</h1>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Link href="/add-product">Agregar Producto</Link>
      <Link href="/repeated-products">Productos Más Repetidos</Link>
      <div className={styles.productList}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
