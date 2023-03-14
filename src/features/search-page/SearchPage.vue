<script setup>
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted, ref, toRaw, watchEffect} from "vue";
import PokemonListContainer from "@/components/pokemon-list-container/PokemonListContainer";

const rout = useRoute()
const store = useStore()
const filteredPokemon = ref([])
const currentPage = 1
const limit = 100000

const pokemonData = computed(() => store.state.cards.pokemonData)
const isLoading = computed(() => store.state.cards.isLoading)

const filterData = (data) => {
  return data.filter((pokemon) => pokemon.name.toLowerCase().includes(rout.params.letter))
}
//watch(rout,()=>{})
watchEffect(() => {
  filteredPokemon.value = filterData(toRaw(pokemonData.value));
});

onMounted(() => {
  store.dispatch('cards/fetchPokemonData', {currentPage, limit})
})
</script>

<template>
  <div class="container-page">
    <div class="flex">
      <RouterLink to="/" class="link">Home</RouterLink>
      Search: {{ $route.params.letter }}
    </div>
    <PokemonListContainer :pokemonList="filteredPokemon" :is-loading="isLoading"/>
  </div>

</template>


<style scoped>

</style>

