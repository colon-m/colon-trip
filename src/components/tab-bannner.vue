<template>
  <div class="tab-banner">
    <ul class="tab">
      <van-tabbar v-model="currentIndex" active-color="orange">
        <template v-for="(item,index) in tabdata" :key="index">
            <van-tabbar-item :to="item.path">
              <span>{{ item.page }}</span>
                <template #icon="props">
                  <img :src="props.active ? getUrl(item.imgUrl_active) : getUrl(item.imgUrl) " />
                </template>
            </van-tabbar-item>
        </template>
      </van-tabbar>
    </ul>
  </div>
</template>

<script setup>
  import {tabdata} from "@/assets/data/tab-data.js"
  import { getUrl } from "@/utils/useGetURL";
  import { ref } from "vue";
  const currentIndex = ref(0)
</script> 

<style scoped>
  .tab-banner{
    position: fixed;
    width: 100%;
    bottom: 0px;
    border-top: 1px solid #a5a5a57c;
  }
  .tab-banner:deep(.van-tabbar-item__icon img){
    height: 26px;
  }
  .tab{
    display: flex;
  }
  .tab-item {
    text-align: center;
    flex: 1;
  }
  .active {
    color: rgb(255, 196, 0);
  }
  .tab-item img{
    width: 36px;
  }
</style>