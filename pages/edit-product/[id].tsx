import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { updateProduct } from '../../store/productSlice';
import { Product } from '../../models/Product';
import ProductForm from '../../components/ProductForm';
import { useEffect, useState } from 'react';

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const [product, setProduct] = useState<Omit<Product, 'id'>>();

  useEffect(() => {
    const productToEdit = products.find(p => p.id === id);
    if (productToEdit) {
      setProduct({ name: productToEdit.name, price: productToEdit.price, status: productToEdit.status });
    }
  }, [id, products]);

  const handleUpdateProduct = (updatedProduct: Omit<Product, 'id'>) => {
    if (id) {
      dispatch(updateProduct({ ...updatedProduct, id: id.toString() }));
      router.push('/');
    }
  };

  return (
    <div>
      <h1>Editar Producto</h1>
      {product && <ProductForm product={product} onSave={handleUpdateProduct} />}
    </div>
  );
};

export default EditProduct;
