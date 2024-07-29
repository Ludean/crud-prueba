import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getProductCounts } from '../utils/productUtils';
import styles from '../styles/Home.module.css'; // Asegúrate de importar los estilos

const RepeatedProducts = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const productCounts = getProductCounts(products);

  return (
    <div className={styles.repeatedProducts}>
      <h1>Productos Más Repetidos</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {productCounts.map(({ name, count }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RepeatedProducts;

