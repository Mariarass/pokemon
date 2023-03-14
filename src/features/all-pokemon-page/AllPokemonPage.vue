<script setup>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
import PokemonListContainer from "@/components/pokemon-list-container/PokemonListContainer";

const store = useStore()

const currentPage = ref(1)
const limit = ref(10)

const pokemonData = computed(() => store.state.cards.pokemonData)
const isLoading = computed(() => store.state.cards.isLoading)
const totalCount = computed(() => store.state.cards.totalCount)

const handlePageChange = (current, size) => {
  currentPage.value = current
  limit.value = size
  store.dispatch('cards/fetchPokemonData', {currentPage, limit})
}

onMounted(() => {
  store.dispatch('cards/fetchPokemonData', {currentPage, limit})
})

</script>

<template>
  <div class="container-page">
    <PokemonListContainer :pokemonList="pokemonData" :is-loading="isLoading"/>
    <APagination
        :current="currentPage"
        :total="totalCount"
        :defaultPageSize="10"
        @change="handlePageChange"
    />
  </div>

</template>


<style scoped>

</style>