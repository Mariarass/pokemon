<script setup>
import {defineProps, ref, toRefs, watch} from "vue";
import {useStore} from "vuex";

const props = defineProps(['id'])


const store = useStore()
const checked = ref(false)
const {id} = toRefs(props)

function catchPokemon() {

  let cards = JSON.parse(localStorage.getItem('pokemons')) || []
  let newData = checked.value
      ? cards.filter((el) => el !== id.value,)
      : [...cards, id.value]
  localStorage.setItem('pokemons', JSON.stringify(newData))
  store.dispatch('cards/changeMyPokemon')
  checked.value = !checked.value
}


watch(() => id.value, (newValue) => {

  id.value = newValue
  let cards = JSON.parse(localStorage.getItem('pokemons')) || []
  const ifCheck = cards.find((el) => el === newValue)
  checked.value = !!ifCheck
})


</script>

<template>

  <ATooltip :title="checked?'remove pokemon from pokedox':'add pokemon to pokedox'" color="#ed5564">
    <img
        @click="catchPokemon"
        v-if="checked"
        class="img"
        v-bind:src="require('../../../assets/pokeballfill.png')"/>
    <img
        @click="catchPokemon"
        v-else class="img"
        v-bind:src="require('../../../assets/pokeball.png')"/>
  </ATooltip>

</template>


<style scoped>
.img {
  width: 25px;
  cursor: pointer;
}

</style>