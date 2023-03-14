<script setup>
import {defineProps} from "vue";
import PokemonCard from "@/features/all-pokemon-page/pokemon-card/PokemonCard";

const props = defineProps(['pokemonList', 'isLoading'])

</script>


<template>
  <ASpin v-if="isLoading" class="spinner"/>
  <div v-else>
    <div v-if="props.pokemonList.length!==0" class="pokemon-container">
      <div v-for="(pokemon, index) in props.pokemonList" :key="index">
        <PokemonCard :pokemon="pokemon"/>
      </div>
    </div>

    <div v-else class="empty">
      List is empty
    </div>
  </div>
</template>


<style scoped>
.spinner {

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.pokemon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.empty {

  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>