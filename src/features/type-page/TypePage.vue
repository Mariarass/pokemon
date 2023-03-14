<script setup>

import {useRoute} from "vue-router";
import {useStore} from "vuex";
import useColors from "@/composables/useColors";
import {computed, onMounted} from "vue";
import PokemonListContainer from "@/components/pokemon-list-container/PokemonListContainer";

const rout = useRoute()
const store = useStore()
const {color} = useColors()

const pokemonData = computed(() => store.state.cards.pokemonData)
const isLoading = computed(() => store.state.cards.isLoading)
const currentType = computed(() => store.state.cards.currentType)

onMounted(() => {
  store.dispatch('cards/fetchTypePokemon', rout.params.id)
})


</script>

<template>
  <div class="container-page">
    <div class="flex">
      <router-link to="/" class="link">Home</router-link>
      <p :style="{ background: color[currentType] }" class="type">
        {{ currentType }}
      </p>

    </div>
    <PokemonListContainer :pokemonList="pokemonData" :is-loading="isLoading"/>

  </div>

</template>


<style scoped>

</style>