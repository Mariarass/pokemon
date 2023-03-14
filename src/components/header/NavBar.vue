<script setup>
import InputSearchPokemon from "@/components/input-search/InputSearchPokemon";
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

const store = useStore()

const count = computed(() => store.state.cards.myPokemon)

onMounted(() => {
  store.dispatch('cards/changeMyPokemon')
})

</script>

<template>
  <div class="header">
    <img class="logo"
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png">
    <InputSearchPokemon/>
    <div class="container">
      <ABadge :count="count">
        <RouterLink to="/myPokemon">
          <img class="imgPokedox" :src="require('../../assets/pokeballfill.png')"/>
        </RouterLink>

      </ABadge>

    </div>

  </div>
</template>


<style scoped>
.header {
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.logo {
  width: 100px;

}

.imgPokedox {
  width: 30px;
  height: 30px;
  cursor: pointer;


}

.container {
  display: flex;
  gap: 30px;

}
@media (max-width: 500px) {
  .logo{
    display: none;
  }

}
</style>