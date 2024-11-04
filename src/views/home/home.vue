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
        <span>{{start.month()+1}}月{{ start.date() }}日</span>
      </div>
      <div class="endTime">
        <span>共{{ totalDays }}晚</span>
      </div>
      <div class="endTime">
        <p>结束时间</p>
        <span>{{end.month()+1}}月{{end.date()}}日</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from './nav-bar/nav-bar.vue';
import position from './position/position.vue';
import { computed } from 'vue';
import dayjs from 'dayjs';

const start = ref("")
const end = ref("")
start.value = dayjs()
end.value = start.value.add(1,"day")
let totalDays = dayjs()
totalDays = computed( () => end.value.diff(start.value,"day") )

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