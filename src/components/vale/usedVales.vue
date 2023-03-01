<template>
  <div class="ticket" @click="openConfirmation">
    <div class="ticket-content-wrapper">
      <header class="ticket2__header">Vale por: {{vale.name}}</header>
      <div class="ticket2__rip"></div>
      <div class="ticket2__body">
        <h6 v-if="!props.isSoon">Canjeado el: : {{new Date(vale.takenDate).toLocaleDateString('en-GB')}}</h6>
        <h6 v-if="props.isSoon">Disponible desde: : {{new Date(vale.fDisponibleDesde).toLocaleDateString('en-GB')}}</h6>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ValeInterface} from "@/models/vale.interface";
import {ref} from "vue";
import {Service} from "@/views/service";
import {useShare} from "@vueuse/core";
const props = defineProps<{
  vale: ValeInterface,
  isSoon: boolean
}>();
const displayConfirmation = ref(false);
const service: Service = new Service();



const openConfirmation = () => {
  displayConfirmation.value = true;
};



</script>

<style >

:root {
  --size: 1;
  --background: #000;
  --color1: #d25778;
  --color2: #ec585c;
  --color3: #e7d155;
  --color4: #56a8c6;
}

body {
  background: var(--background);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.ticket {
  left: -80px;
  width: 350px;
  height: 220px;
  margin: 100px auto;
  position: relative;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  background: linear-gradient(
      to right,
      var(--color1),
      var(--color2),
      var(--color3),
      var(--color4)
  );
  border-radius: 20px;
  padding: 5px;
}

.ticket:before,
.ticket:after {
  content: '';
  display: block;
  position: absolute;
  top: 65px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 2;
  background-color: var(--background);
}

.ticket:before {
  border: 5px solid var(--color1);
  border-top-color: transparent;
  border-left-color: transparent;
  transform: rotate(-45deg);
  left: -35px;
}

.ticket:after {
  border: 5px solid var(--color4);
  border-top-color: transparent;
  border-left-color: transparent;
  transform: rotate(135deg);
  right: -35px;
}

.ticket-content-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--background);
  border-radius: 15px;
}


</style>

<style lang="scss" scoped>
.ticket2 {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 100px;
  filter: drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.15));

  &__header {
    position: relative;

    padding: 1rem;
    padding-bottom: 0;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 5px 5px 0 0;

    &::after {
      position: absolute;
      content: "";
      height: 1px;
      left: 20px;
      right: 20px;
      bottom: -20px;
      z-index: 2;
    }
  }

  &__rip {
    position: relative;
    height: 40px;
    flex-shrink: 0;
    margin: 0 20px;


    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 40px;
      height: 40px;
      border: 10px solid transparent;

      transform: translate(-50%, -50%) rotate(45deg);
      border-radius: 50%;
      top: 50%;
    }

    &::before {
      left: -20px;
    }

    &::after {
      right: -80px;
      transform: translate(-50%, -50%) rotate(225deg);
    }
  }

  &__body {

    padding: 1rem;
    border-radius: 0 0 5px 5px;
    padding-top: 2rem;
  }
}
</style>