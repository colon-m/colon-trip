<template>
  <div class="home">
    <NavBar/>
    <h2 class="show">
      <img src="@\assets\img\home\banner.webp" alt="">
    </h2>
    <position />
  </div>
</template>

<script setup>
import NavBar from './nav-bar/nav-bar.vue';
import position from './position/position.vue';
</script>

<style scoped>
.show img{
  width: 100%;
}
</style>