import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Product } from '../models/Product';
import ProductForm from '../components/ProductForm';
import { addProduct } from '../store/productSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    const productWithId: Product = { ...newProduct, id: Date.now().toString() };
    dispatch(addProduct(productWithId));
    router.push('/');
  };

  return (
    <div>
      <h1>Agregar Producto</h1>
      <ProductForm onSave={handleAddProduct} />
    </div>
  );
};

export default AddProduct;

