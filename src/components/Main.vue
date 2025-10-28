<script setup lang="ts">
import { Truck } from "lucide-vue-next";
import FooterLayout from "./FooterLayout.vue";
</script>

<template>
  <DIV>
    <div class="flex pt-10 p-10">
      <div class="w-300">
        <p
          class="bg-[#FEF5C8] border-[#F8E72C] text-center h-6 w-30 pl-2 border rounded-[15px] text-[13px] flex pl-1 gap-1"
        >
          Entrega gratís <span> <Truck :size="17"></Truck> </span>
        </p>
        <h1 class="text-[35px] w-[80%] font-extrabold md:text-[50px]">
          Suco para um dia mais refrescante
        </h1>
        <p class="font-extralight w-[70%]">
          mantenha-se fresco neste verão, pois sucos de frutas e bebidas estão
          disponíveis online
        </p>

        <button
          @click="$router.push('/produtos')"
          class="mt-10 border-orange-500 border-[2px] text-orange-700 p-3 rounded-[20px] w-60 hover:bg-orange-500 hover:text-white"
        >
          Ver Produtos
        </button>
      </div>

      <div class="hidden md:block">
        <img src="../assets/Sem Título-1.png " alt="" class="w-180" />
      </div>
    </div>
    <FooterLayout />
  </DIV>
</template>
