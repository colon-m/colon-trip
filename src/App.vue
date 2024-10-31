<script setup>
  import tabBannner from './components/tab-bannner.vue';
  import { useRoute } from 'vue-router';
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
    <tabBannner v-if="!useRoute().meta.notShowBar"></tabBannner>
  </div>
</template>

<style scoped>

</style>
