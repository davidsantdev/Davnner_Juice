<script setup lang="ts">
import useProducts from "@/composables/useProducts";
import { onMounted } from "vue";

const { products, addProduct } = useProducts();

onMounted(() => {
  // Exemplo de adição de um produto ao montar o componente
  addProduct({ id: 1, name: "Produto Exemplo", price: 100 });
});
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Products Page</h1>
    <p>Bem vindo a página de produtos</p>

    <div>
      <h2 class="text-xl font-semibold mt-6 mb-2">Lista de Produtos:</h2>
      <ul>
        <li v-for="product in products" :key="product.id" class="mb-2">
          {{ product.name }} - ${{ product.price }}
        </li>
      </ul>
    </div>
  </div>
</template>
