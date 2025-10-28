import { ref } from "vue";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default () => {
  const products = ref<Product[]>([]);

  function addProduct(product: Product) {
    products.value.push(product);
  }

  return { addProduct, products };
};
