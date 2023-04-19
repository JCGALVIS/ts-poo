import { ProductMemoryServices } from './services/product-memory.service';

const productServices = new ProductMemoryServices();

productServices.create({
  title: 'Product 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: 12,
  images: [],
});

const products = productServices.getAll();
const productId = products[0].id;

productServices.updateProduct(productId, {
  title: 'Cambiar title',
});

const rta = productServices.findOne(productId);

console.log(rta);
