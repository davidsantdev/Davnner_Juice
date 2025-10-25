<script setup lang="ts">

</script>

<template>
    <div> 
        <header class=" flex items-center justify-center pt-5 ">
            
            <div class=" w-[50%] border-orange-500 border-[2px] rounded-2xl h-8 flex justify-between "> <div class="pl-10 flex gap-10" > <button class="text-[13px]" @click="$router.push('/produtos')"> Produtos</button>   <button class="text-[13px]"> Sobre</button> </div> 
                <div @click="$router.push('/')" class="bg-orange-500 w-[70px] text-center h-[70px] rounded-[50%] relative top-[-20px] "> <img   src="../assets/2.png" alt=""></div>   <div class="pr-10 flex gap-10"  > <button class="text-[13px]"> Contato</button>   <button class="text-[13px]" @click="$router.push('/')" > Home</button> </div>  </div>
        </header>
    </div>

</template>