<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const value = ref('')
const error = ref(false)
const router = useRouter()

const onSearch = () => {
  value.value.trim().length !== 0
      ? router.push(`/search/${value.value}`)
      : error.value = true
}
</script>

<template>
  <AInputSearch
      class="input"
      v-model:value="value"
      placeholder="search pokemon"
      style="width: 200px"
      @search="onSearch"
  />
</template>

<script>

</script>

<style scoped>
.input {
  font-family: 'Montserrat', sans-serif;
}

</style>