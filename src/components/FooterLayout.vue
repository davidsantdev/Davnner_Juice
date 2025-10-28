<script setup lang="ts">
import { Github, Inbox, Instagram, Linkedin } from "lucide-vue-next";
import Button from "./ui/button/Button.vue";
</script>

<template>
  <div class="bg-white border w-full h-100 shadow">
    <footer class="flex p-[4%] h-90 gap-[5%] flex-wrap">
      <div>
        <h2 class="text-slate-900 font-bold text-[20px]">Davnner</h2>
        <p class="text-slate-500 text-[13px]">
          Um site criado para estudos de conhecimento vuejs
        </p>
        <div class="flex gap-4">
          <a href="https://www.instagram.com/davdev.br/"
            ><Instagram :size="20" class="mt-4 text-slate-900 cursor-pointer"
          /></a>
          <a href="https://www.linkedin.com/in/davidsantdev/">
            <Linkedin
              :size="20"
              class="mt-4 text-slate-900 cursor-pointer"
            ></Linkedin>
          </a>
          <a href="https://github.com/davidsantdev">
            <Github
              :size="20"
              class="mt-4 text-slate-900 cursor-pointer"
            ></Github>
          </a>
          <a
            href="mailto:davidsantosdacosta123@gmail.com?subject=Contato%20do%20portfólio&body=Olá,%20David!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar."
          >
            <Inbox
              :size="20"
              class="mt-4 text-slate-900 cursor-pointer"
            ></Inbox>
          </a>
        </div>
      </div>

      <div>
        <p class="text-slate-900 font-medium">Conhecimentos usados</p>
        <div class="flex flex-col">
          <Button class="text-slate-500 font-normal" variant="link"
            >Vue Router</Button
          >
          <Button class="text-slate-500 font-normal" variant="link"
            >Biblioteca ui</Button
          >
          <Button class="text-slate-500 font-normal" variant="link"
            >Componentização</Button
          >
          <Button class="text-slate-500 font-normal" variant="link"
            >Tailwind</Button
          >
          <Button class="text-slate-500 font-normal" variant="link"
            >Typescript</Button
          >
        </div>
      </div>
      <div>
        <p class="text-slate-900 font-medium">Conhecimentos possuídos</p>
        <div class="flex flex-col">
          <Button class="text-slate-500 font-normal" variant="link"
            >AXIOS</Button
          >
          <Button class="text-slate-500 font-normal" variant="link"
            >Reatividade
          </Button>
          <Button class="text-slate-500 font-normal" variant="link"
            >Computadas</Button
          >
          <Button class="text-slate-500 font-normal" variant="link"
            >Composables...</Button
          >
        </div>
      </div>
    </footer>
    <div class="bg-gray-100 mt-auto h-10 flex justify-between p-2">
      <div>
        <p class="text-[15px] font-sans text-slate-700">
          &copy; 2025 David Santos - VueJS
        </p>
      </div>
      <div>
        <Button class="text-[15px] font-sans text-slate-700" variant="link"
          >Privacidade</Button
        >
        <Button class="text-[15px] font-sans text-slate-700" variant="link"
          >Termos</Button
        >
      </div>
    </div>
  </div>
</template>
