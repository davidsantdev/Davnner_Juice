<script setup lang="ts"></script>

<template>
  <div>
    <header class="flex items-center justify-center pt-5">
      <div
        class="w-[60%] border-orange-500 border-[2px] rounded-2xl h-8 flex justify-between"
      >
        <div class="pl-10 flex gap-10">
          <RouterLink to="produtos">Produtos</RouterLink>
        </div>
        <RouterLink
          to="/"
          class="bg-orange-500 w-[50px] text-center h-[50px] rounded-[50%] relative top-[-10px]"
        >
          <img src="../assets/2.png" alt=""
        /></RouterLink>
        <div class="pr-10 flex gap-10">
          <RouterLink to="/">Home</RouterLink>
        </div>
      </div>
    </header>
  </div>
</template>
