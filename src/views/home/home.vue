<template>
  <div class="home">
    <NavBar/>
    <h2 class="show">
      <img src="@\assets\img\home\banner.webp" alt="">
    </h2>
    <position />
    <div class="clander">
      <div class="startTime">
        <p>开始时间</p>
        <span>8月8</span>
      </div>
      <div class="endTime">
        <span>共1晚</span>
      </div>
      <div class="endTime">
        <p>结束时间</p>
        <span>8月9</span>
      </div>
    </div>
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
.clander{
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
</style>