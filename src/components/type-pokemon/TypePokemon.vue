<script setup>
import useColors from "@/composables/useColors"
import {defineProps} from "vue"

const props = defineProps(['pokemonType'])
const {color} = useColors()

</script>

<template>
  <p
      @click="$router.push(`${type.url.slice(25)}`)"
      :style="{ background: color[type.name] }"
      class="type"
      v-for="(type, index) in props.pokemonType"
      :key="index">{{ type.name }}</p>
</template>

<style>
.type {


  text-align: start;
  color: #ffffff;
  width: 60px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  padding: 0px 10px 0px 10px;
  margin: 5px;
  font-size: 10px;
  cursor: pointer;

}
</style>