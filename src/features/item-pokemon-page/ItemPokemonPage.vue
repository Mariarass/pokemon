<script setup>
import TypePokemon from "@/components/type-pokemon/TypePokemon";
import DescriptionPokemon from "@/features/item-pokemon-page/description-pokemon/DescriptionPokemon";
import CatchPokemon from "@/features/item-pokemon-page/catch-pokemon/CatchPokemon";
import {computed, onMounted} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

const store = useStore()
const route = useRoute()

const currentPokemon = computed(() => store.state.cards.currentPokemon)
const isLoading = computed(() => store.state.cards.isLoading)

onMounted(() => {
  store.dispatch('cards/fetchItemPokemon', route.params.id)

})

</script>


<template>
  <div class="container-page">
    <RouterLink to="/" class="link">Home</RouterLink>
    <div v-if="isLoading" class="spinner">
      <ASpin/>
    </div>

    <div class="container" v-else>
      <div class="headerContainer">
        <h3 class="header">{{ currentPokemon.name }} </h3>
        <CatchPokemon :id="currentPokemon.id"/>
      </div>

      <div class="info">
        <div class="img">
          <AImage :width="300" class="pokemon-img" :src="currentPokemon.img" alt="Pokemon Image"></AImage>
        </div>
        <div>
          <p class="description">
            There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows
            larger.</p>
          <DescriptionPokemon/>
          <div class="type">
            <h3>Type</h3>
            <TypePokemon :pokemon-type="currentPokemon.types"/>
          </div>

        </div>
      </div>

    </div>


  </div>


</template>


<style scoped>

.type {
  margin: 20px;
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;

}

.headerContainer {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 20px;


}


.info {
  display: flex;
  gap: 20px;

}
.img{

  width: 300px;
  display: flex;
  justify-content: center;

}

.description {

  margin: 20px;
}


.spinner {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemon-img {
  background-color: #fff;
  width: 200px;
}

@media (max-width: 900px) {

  .info {
    flex-wrap: wrap;
  }
  .img{
    width: 100%;
  }
}


</style>