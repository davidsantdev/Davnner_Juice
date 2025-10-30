<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import Dialog from "../components/ui/dialog/Dialog.vue";
import DialogContent from "../components/ui/dialog/DialogContent.vue";
import DialogTrigger from "../components/ui/dialog/DialogTrigger.vue";
import { PlusIcon, X } from "lucide-vue-next";
import { ref } from "vue";
import FooterLayout from "@/components/FooterLayout.vue";

const marac = ref(true);
const uv = ref(true);
const morang = ref(true);
const abac = ref(true);
const AdcMarac = ref(false);
const AdcUva = ref(false);
const AdcMorang = ref(false);
const AdcAbac = ref(false);

function maracuja() {
  marac.value = false;
  AdcMarac.value = true;
}
function uva() {
  uv.value = false;
  AdcUva.value = true;
}
function morango() {
  morang.value = false;
  AdcMorang.value = true;
}
function abacaxi() {
  abac.value = false;
  AdcAbac.value = true;
}
function adicionaMaracu() {
  marac.value = true;
  AdcMarac.value = false;
}
function adicionaUva() {
  uv.value = true;
  AdcUva.value = false;
}

function adicionaMorang() {
  morang.value = true;
  AdcMorang.value = false;
}

function adicionaAbacaxi() {
  abac.value = true;
  AdcAbac.value = false;
}
</script>

<template>
  <div>
    <div class="p-10">
      <h2 class="font-extrabold text-[20px]">Melhor suco</h2>
      <div class="flex gap-5 mt-5 flex-wrap">
        <button
          class="bg-[#FEF5C8] border-[#F8E72C] text-center h-6 w-20 border rounded-[15px] text-[13px] flex pl-1 justify-between"
        >
          Maracujá
          <span
            ><x v-show="marac" :size="17" class="pt-1" @click="maracuja"> </x>
            <PlusIcon
              :size="17"
              class="pt-1"
              @click="adicionaMaracu"
              v-show="AdcMarac"
            ></PlusIcon>
          </span>
        </button>
        <button
          class="bg-[#FEF5C8] border-[#F8E72C] text-center h-6 w-20 border rounded-[15px] text-[13px] flex pl-1 justify-between"
        >
          Uva
          <span
            ><x v-show="uv" @click="uva" :size="17" class="pt-1"></x>
            <PlusIcon
              :size="17"
              class="pt-1"
              @click="adicionaUva"
              v-show="AdcUva"
          /></span>
        </button>
        <button
          class="bg-[#FEF5C8] border-[#F8E72C] text-center h-6 w-20 border rounded-[15px] text-[13px] flex pl-1 justify-between"
        >
          Morango
          <span
            ><x v-show="morang" @click="morango" :size="17" class="pt-1"> </x>
            <PlusIcon
              :size="17"
              class="pt-1"
              @click="adicionaMorang"
              v-show="AdcMorang"
            ></PlusIcon>
          </span>
        </button>
        <button
          class="bg-[#FEF5C8] border-[#F8E72C] text-center h-6 w-20 border rounded-[15px] text-[13px] flex pl-1 justify-between"
        >
          Abacaxi
          <span
            ><x v-show="abac" @click="abacaxi" :size="17" class="pt-1"></x>
            <PlusIcon
              :size="17"
              class="pt-1"
              @click="adicionaAbacaxi"
              v-show="AdcAbac"
            ></PlusIcon>
          </span>
        </button>
      </div>
      <div class="flex flex-wrap gap-2">
        <Dialog>
          <DialogTrigger as-child>
            <div
              v-show="abac"
              class="flex shadow-lg border border-slate-300 p-10 mt-10 rounded-[20px] w-60"
            >
              <div>
                <img class="w-20" src="../assets/abacaxi.png" alt="" />
              </div>
              <div>
                <p class="font-extralight">Detalhes</p>
                <p class="font-medium text-[20px]">50R$</p>

                <img class="w-20" src="../assets/star.png" alt="" />

                <p class="font-medium text-[20px]">300ml</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent class="w-[70%]">
            <div class="block md:flex gap-[8%]">
              <div>
                <img src="../assets/abacaxi2.png" class="w-70" alt="" />
              </div>

              <div>
                <div class="border p-4 rounded-2xl w-[100%] md:w-[80%]">
                  <h2 class="font-bold text-[25px]">Suco de Abacaxi 300ml</h2>
                  <div class="flex gap-2">
                    <img
                      class="w-[70px] h-[10px] mt-2"
                      src="../assets/star.png"
                      alt=""
                    />
                    <p>100 review</p>
                  </div>
                  <p class="text-emerald-500 font-medium text-[12px]">
                    EM ESTOQUE
                  </p>

                  <p class="font-extralight mt-5 w-[60%] text-[14px]">
                    Suco natural de abacaxi, sem adição de açúcares ou
                    conservantes. Rico em vitaminas e minerais, perfeito para
                    refrescar e nutrir seu corpo.
                  </p>
                  <p class="font-medium text-[20px] mt-5">50R$</p>

                  <Button class="w-[90%] mt-10">
                    <PlusIcon /> Adicionar ao carrinho</Button
                  >
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger as-child>
            <div
              v-show="uv"
              class="flex shadow-lg border border-slate-300 p-10 mt-10 rounded-[20px] w-60"
            >
              <div>
                <img class="w-20" src="../assets/uva.png" alt="" />
              </div>
              <div>
                <p class="font-extralight">Detalhes</p>
                <p class="font-medium text-[20px]">50R$</p>

                <img class="w-20" src="../assets/star.png" alt="" />

                <p class="font-medium text-[20px]">300ml</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent class="w-[70%]">
            <div class="block md:flex gap-[8%]">
              <div><img src="../assets/uva2.png" class="w-70" alt="" /></div>

              <div>
                <div class="border p-4 rounded-2xl w-[100%] md:w-[80%]">
                  <h2 class="font-bold text-[25px]">Suco de Uva 300ml</h2>
                  <div class="flex gap-2">
                    <img
                      class="w-[70px] h-[10px] mt-2"
                      src="../assets/star.png"
                      alt=""
                    />
                    <p>70 review</p>
                  </div>
                  <p class="text-emerald-500 font-medium text-[12px]">
                    EM ESTOQUE
                  </p>

                  <p class="font-extralight mt-5 w-[60%] text-[14px]">
                    Suco natural de Uva, sem adição de açúcares ou conservantes.
                    Rico em vitaminas e minerais, perfeito para refrescar e
                    nutrir seu corpo.
                  </p>
                  <p class="font-medium text-[20px] mt-5">50R$</p>

                  <Button class="w-[90%] mt-10">
                    <PlusIcon /> Adicionar ao carrinho</Button
                  >
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger as-child>
            <div
              v-show="marac"
              class="flex shadow-lg border border-slate-300 p-10 mt-10 rounded-[20px] w-60"
            >
              <div>
                <img class="w-20" src="../assets/maracuja.png" alt="" />
              </div>
              <div>
                <p class="font-extralight">Detalhes</p>
                <p class="font-medium text-[20px]">50R$</p>

                <img class="w-20" src="../assets/star.png" alt="" />

                <p class="font-medium text-[20px]">300ml</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent class="w-[70%]">
            <div class="block md:flex gap-[8%]">
              <div>
                <img src="../assets/maracuja2.png" class="w-70" alt="" />
              </div>

              <div>
                <div class="border p-4 rounded-2xl w-[100%] md:w-[80%]">
                  <h2 class="font-bold text-[25px]">Suco de Maracuja 300ml</h2>
                  <div class="flex gap-2">
                    <img
                      class="w-[70px] h-[10px] mt-2"
                      src="../assets/star.png"
                      alt=""
                    />
                    <p>70 review</p>
                  </div>
                  <p class="text-emerald-500 font-medium text-[12px]">
                    EM ESTOQUE
                  </p>

                  <p class="font-extralight mt-5 w-[60%] text-[14px]">
                    Suco natural de maracuja, sem adição de açúcares ou
                    conservantes. Rico em vitaminas e minerais, perfeito para
                    refrescar e nutrir seu corpo.
                  </p>
                  <p class="font-medium text-[20px] mt-5">50R$</p>

                  <Button class="w-[90%] mt-10">
                    <PlusIcon /> Adicionar ao carrinho</Button
                  >
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger as-child>
            <div
              v-show="morang"
              class="flex shadow-lg border border-slate-300 p-10 mt-10 rounded-[20px] w-60"
            >
              <div>
                <img class="w-20" src="../assets/morango.png" alt="" />
              </div>
              <div>
                <p class="font-extralight">Detalhes</p>
                <p class="font-medium text-[20px]">50R$</p>

                <img class="w-20" src="../assets/star.png" alt="" />

                <p class="font-medium text-[20px]">300ml</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent class="w-[70%]">
            <div class="block md:flex gap-[8%]">
              <div>
                <img src="../assets/morango2.png" class="w-70" alt="" />
              </div>

              <div>
                <div class="border p-4 rounded-2xl w-[100%] md:w-[80%]">
                  <h2 class="font-bold text-[25px]">Suco de Morango 300ml</h2>
                  <div class="flex gap-2">
                    <img
                      class="w-[70px] h-[10px] mt-2"
                      src="../assets/star.png"
                      alt=""
                    />
                    <p>70 review</p>
                  </div>
                  <p class="text-emerald-500 font-medium text-[12px]">
                    EM ESTOQUE
                  </p>

                  <p class="font-extralight mt-5 w-[60%] text-[14px]">
                    Suco natural de morango, sem adição de açúcares ou
                    conservantes. Rico em vitaminas e minerais, perfeito para
                    refrescar e nutrir seu corpo.
                  </p>
                  <p class="font-medium text-[20px] mt-5">50R$</p>

                  <Button class="w-[90%] mt-10">
                    <PlusIcon /> Adicionar ao carrinho</Button
                  >
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger as-child>
            <div
              v-show="abac"
              class="flex shadow-lg border border-slate-300 p-10 mt-10 rounded-[20px] w-60"
            >
              <div>
                <img class="w-20" src="../assets/abacaxi.png" alt="" />
              </div>
              <div>
                <p class="font-extralight">Detalhes</p>
                <p class="font-medium text-[20px]">70R$</p>

                <img class="w-20" src="../assets/star.png" alt="" />

                <p class="font-medium text-[20px]">500ml</p>
              </div>
            </div>
          </DialogTrigger>

          <DialogContent class="w-[70%]">
            <div class="block md:flex gap-[8%]">
              <div>
                <img src="../assets/abacaxi2.png" class="w-70" alt="" />
              </div>

              <div>
                <div class="border p-4 rounded-2xl w-[100%] md:w-[80%]">
                  <h2 class="font-bold text-[25px]">Suco de Abacaxi 500ml</h2>
                  <div class="flex gap-2">
                    <img
                      class="w-[70px] h-[10px] mt-2"
                      src="../assets/star.png"
                      alt=""
                    />
                    <p>100 review</p>
                  </div>
                  <p class="text-emerald-500 font-medium text-[12px]">
                    EM ESTOQUE
                  </p>

                  <p class="font-extralight mt-5 w-[60%] text-[14px]">
                    Suco natural de abacaxi, sem adição de açúcares ou
                    conservantes. Rico em vitaminas e minerais, perfeito para
                    refrescar e nutrir seu corpo.
                  </p>
                  <p class="font-medium text-[20px] mt-5">70R$</p>

                  <Button class="w-[90%] mt-10">
                    <PlusIcon /> Adicionar ao carrinho</Button
                  >
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger as-child>
            <div
              v-show="uv"
              class="flex shadow-lg border border-slate-300 p-10 mt-10 rounded-[20px] w-60"
            >
              <div>
                <img class="w-20" src="../assets/uva.png" alt="" />
              </div>
              <div>
                <p class="font-extralight">Detalhes</p>
                <p class="font-medium text-[20px]">70R$</p>

                <img class="w-20" src="../assets/star.png" alt="" />

                <p class="font-medium text-[20px]">500ml</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent class="w-[70%]">
            <div class="block md:flex gap-[8%]">
              <div><img src="../assets/uva2.png" class="w-70" alt="" /></div>

              <div>
                <div class="border p-4 rounded-2xl w-[100%] md:w-[80%]">
                  <h2 class="font-bold text-[25px]">Suco de Uva 500ml</h2>
                  <div class="flex gap-2">
                    <img
                      class="w-[70px] h-[10px] mt-2"
                      src="../assets/star.png"
                      alt=""
                    />
                    <p>70 review</p>
                  </div>
                  <p class="text-emerald-500 font-medium text-[12px]">
                    EM ESTOQUE
                  </p>

                  <p class="font-extralight mt-5 w-[60%] text-[14px]">
                    Suco natural de Uva, sem adição de açúcares ou conservantes.
                    Rico em vitaminas e minerais, perfeito para refrescar e
                    nutrir seu corpo.
                  </p>
                  <p class="font-medium text-[20px] mt-5">70R$</p>

                  <Button class="w-[90%] mt-10">
                    <PlusIcon /> Adicionar ao carrinho</Button
                  >
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger as-child>
            <div
              v-show="marac"
              class="flex shadow-lg border border-slate-300 p-10 mt-10 rounded-[20px] w-60"
            >
              <div>
                <img class="w-20" src="../assets/maracuja.png" alt="" />
              </div>
              <div>
                <p class="font-extralight">Detalhes</p>
                <p class="font-medium text-[20px]">70R$</p>

                <img class="w-20" src="../assets/star.png" alt="" />

                <p class="font-medium text-[20px]">500ml</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent class="w-[70%]">
            <div class="block md:flex gap-[8%]">
              <div>
                <img src="../assets/maracuja2.png" class="w-70" alt="" />
              </div>

              <div>
                <div class="border p-4 rounded-2xl w-[100%] md:w-[80%]">
                  <h2 class="font-bold text-[25px]">Suco de Maracuja 300ml</h2>
                  <div class="flex gap-2">
                    <img
                      class="w-[70px] h-[10px] mt-2"
                      src="../assets/star.png"
                      alt=""
                    />
                    <p>70 review</p>
                  </div>
                  <p class="text-emerald-500 font-medium text-[12px]">
                    EM ESTOQUE
                  </p>

                  <p class="font-extralight mt-5 w-[60%] text-[14px]">
                    Suco natural de maracuja, sem adição de açúcares ou
                    conservantes. Rico em vitaminas e minerais, perfeito para
                    refrescar e nutrir seu corpo.
                  </p>
                  <p class="font-medium text-[20px] mt-5">70R$</p>

                  <Button class="w-[90%] mt-10">
                    <PlusIcon /> Adicionar ao carrinho</Button
                  >
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger as-child>
            <div
              v-show="morang"
              class="flex shadow-lg border border-slate-300 p-10 mt-10 rounded-[20px] w-60"
            >
              <div>
                <img class="w-20" src="../assets/morango.png" alt="" />
              </div>
              <div>
                <p class="font-extralight">Detalhes</p>
                <p class="font-medium text-[20px]">70R$</p>

                <img class="w-20" src="../assets/star.png" alt="" />

                <p class="font-medium text-[20px]">500ml</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent class="w-[70%]">
            <div class="block md:flex gap-[8%]">
              <div>
                <img src="../assets/morango2.png" class="w-70" alt="" />
              </div>

              <div>
                <div class="border p-4 rounded-2xl w-[100%] md:w-[80%]">
                  <h2 class="font-bold text-[25px]">Suco de Morango 500ml</h2>
                  <div class="flex gap-2">
                    <img
                      class="w-[70px] h-[10px] mt-2"
                      src="../assets/star.png"
                      alt=""
                    />
                    <p>70 review</p>
                  </div>
                  <p class="text-emerald-500 font-medium text-[12px]">
                    EM ESTOQUE
                  </p>

                  <p class="font-extralight mt-5 w-[60%] text-[14px]">
                    Suco natural de morango, sem adição de açúcares ou
                    conservantes. Rico em vitaminas e minerais, perfeito para
                    refrescar e nutrir seu corpo.
                  </p>
                  <p class="font-medium text-[20px] mt-5">70R$</p>

                  <Button class="w-[90%] mt-10">
                    <PlusIcon /> Adicionar ao carrinho</Button
                  >
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
    <FooterLayout />
  </div>
</template>
