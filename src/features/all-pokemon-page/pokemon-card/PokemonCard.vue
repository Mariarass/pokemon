<script setup>
import {defineProps} from "vue";
import TypePokemon from "@/components/type-pokemon/TypePokemon";

const props=defineProps(['pokemon'])

</script>

<template>

    <RouterLink :to="`/pokemon/${pokemon.id}`">
      <ACard hoverable class="pokemon-card">
        <h2 class="header">{{ props.pokemon.name }}</h2>
        <img class="img" :src="pokemon.image" alt="Pokemon Image"/>
        <div class="containerType">
          <TypePokemon :pokemon-type="pokemon.types"/>
        </div>

      </ACard>
    </RouterLink>



</template>


<style scoped>


.img {
  width: 200px;
  margin-bottom: 10px;
  height: 200px;
}


.pokemon-card {
  min-height: 330px;
  width: 240px;

}

.containerType {

  display: flex;
  flex-wrap: wrap;
  background-color: #fff;

}



</style>