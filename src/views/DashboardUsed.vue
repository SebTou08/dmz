<template>
  <div class="gll-cnt ">

        <div class="gallery">
          <div  v-for="(item, index) in used" :key="index">
            <div>
              <Vale :used="true" class="feature"  :vale="item"/>

            </div>
          </div>
        </div>

  <Button class="btn-flotante" @click="goTo">Disponibles</Button>
  </div>


</template>

<script setup lang="ts">

import Cta from "@/components/cta/cta.vue";
import Vale from "@/components/vale/vale.vue";
import {Service} from "@/views/service";
import type {ValeInterface} from "@/models/vale.interface";
import {ref} from "vue";
import router from "@/router";

const goTo = () => {
  router.push('/dashboard')
}
const active1 = ref(0);
const tabs = ref([
  {
    title: 'Vales disponibles',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: 'Vales usados',
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
  }
]);

const service: Service = new Service();
const vales: Array<ValeInterface> = await service.getAllVales();
const available: Array<ValeInterface> = vales.filter(e => !e.taken);
const used: Array<ValeInterface> = vales.filter(e => e.taken);
console.log(vales)
</script>

<style scoped>
.gallery{
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 15rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}
.feature{
  grid-column: span 2;

}
.p-tabview  {
  background: #000000 !important;
  padding: 1rem;
  border: 0 none;
  color: #0f77df;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.dark-panel{
  background: #000000 !important;
}
.p-tabview-panels{
  background: #000000 !important;

}
.btn-flotante {
  font-size: 16px; /* Cambiar el tamaño de la tipografia */
  text-transform: uppercase; /* Texto en mayusculas */
  font-weight: bold; /* Fuente en negrita o bold */
  color: #ffffff; /* Color del texto */
  border-radius: 5px; /* Borde del boton */
  letter-spacing: 2px; /* Espacio entre letras */
  background-color: #E91E63; /* Color de fondo */
  padding: 18px 30px; /* Relleno del boton */
  position: fixed;
  bottom: 40px;
  right: 40px;
  transition: all 300ms ease 0ms;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  z-index: 99;
}
.btn-flotante:hover {
  background-color: #2c2fa5; /* Color de fondo al pasar el cursor */
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-7px);
}
</style>
<style lang="scss" scoped>
.tabview-custom {
  i, span {
    vertical-align: middle;
  }

  span {
    margin: 0 .5rem;
  }
}

.p-tabview p {
  line-height: 1.5;
  margin: 0;
}

:host  .p-tabview .p-tabview-panels{
  background-color: #0f77df;
}
::v-deep(.dark-panel.p-panel) {
  .p-panel-titlebar {
    background: #212121;
  }

}
</style>