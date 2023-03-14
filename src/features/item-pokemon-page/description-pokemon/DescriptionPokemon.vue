<script setup>

import {useStore} from "vuex";
import {computed} from "vue";
import {QuestionCircleOutlined} from '@ant-design/icons-vue'

const store = useStore()

const currentPokemon = computed(() => store.state.cards.currentPokemon)


</script>

<template>
  <ACard class="card">
    <p>Height <br/> {{ currentPokemon.height }}</p>
    <p>Weight <br/> {{ currentPokemon.weight }}</p>
    <p>Abilities </p>
    <div class="type-container" v-for="(ability) in currentPokemon.abilities" :key="ability.id">
      {{ ability.name }}
      <ATooltip :title="ability.effect_entries[ability.effect_entries[0].language.name==='en'?0:1].effect"
                color='#ed5564'>
        <QuestionCircleOutlined/>
      </ATooltip>
    </div>

  </ACard>
</template>


<style scoped>
.card {
  margin: 20px;
}

.type-container {
  display: flex;
  gap: 20px;
  color: black;
  align-items: center;
}
</style>

