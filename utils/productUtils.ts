import { Product } from '../models/Product';

export const getProductCounts = (products: Product[]) => {
  const nameCounts: { [key: string]: number } = {};

  products.forEach(product => {
    if (nameCounts[product.name]) {
      nameCounts[product.name]++;
    } else {
      nameCounts[product.name] = 1;
    }
  });

  const sortedCounts = Object.entries(nameCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return sortedCounts.slice(0, 5); 
};
