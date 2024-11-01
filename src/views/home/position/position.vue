<template>
  <div class="position">
    <div class="first-line">
      <div class="selected" @click="selbtn">{{ cityStore.currentCity.cityName }}</div>
      <div class="mine">
        <span class="text">我的位置</span>
        <img src="@\assets\img\home\icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCityStore } from '@/stores/modules/city';

const router = useRouter()
const selbtn=()=>{
  router.push('/cities')
}
const cityStore = useCityStore()
</script>

<style lang="less" scoped>
  .position {
    padding: 8px 10px 8px 20px;
    .first-line{
      display: flex;
      .selected{
        flex: 1;
        font-size: 16px;
        color: rgb(72, 72, 72);
      }
      .mine {
        width: 100px;
        position: relative;
        .text{
          margin-right: 5px;
          font-size: 14px;
          color: rgb(104, 104, 104);
        }
        img{
          position: absolute;
          top:0;
          width: 14px;
        }
      }
    }
  }
</style>