<script setup>
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import PokemonListContainer from "@/components/pokemon-list-container/PokemonListContainer";

const store = useStore()

const myPokemon = computed(() => store.state.cards.myPokemonData)
const isLoading = computed(() => store.state.cards.isLoading)

onMounted(() => {
  store.dispatch('cards/getMyPokemon')

})

</script>
<template>
  <div class="container-page">
    <div class="flex">
      <RouterLink to="/" class="link">Home</RouterLink>
      <p>
        My pokedox
      </p>
    </div>
    <PokemonListContainer :pokemonList="myPokemon" :is-loading="isLoading"/>
  </div>

</template>


<style scoped>

p {
  margin: 0;
  padding: 0;

  width: 100%;
  text-align: end;

}
</style>