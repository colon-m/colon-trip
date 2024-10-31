<template>
  <div class="position">
    <div class="first-line">
      <div class="selected" @click="selbtn">重庆</div>
      <div class="mine">
        <span class="text">我的位置</span>
        <img src="@\assets\img\home\icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const selbtn=()=>{
  router.push('/cities')
}
</script>

<style lang="less" scoped>
  .position {
    padding: 8px 20px;
    .first-line{
      display: flex;
      .selected{
        flex: 1;
      }
      .mine {
        width: 100px;
        position: relative;
        .text{
          margin-right: 5px;
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