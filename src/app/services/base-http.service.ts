import axios from 'axios';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/products.dto';

export class BaseHttpService<T> {
  constructor(protected url: string) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  async update<P, D>(id: P, changes: D) {
    const { data } = await axios.put<T>(`${this.url}/${id}`, changes);
    return data;
  }
}

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);
  const rta = await productService.getAll();
  console.log(rta.length);

  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'asa'
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Product>(url2);
  const rta1 = await categoryService.getAll();
  console.log(rta1.length);
})();
