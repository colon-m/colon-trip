<template>
  <div class="cities">
    <van-search 
    v-model="searchValue"  
    placeholder="请输入搜索关键词"
    show-action
    @cancel="onCancel"
    shape="round"/>
    <van-tabs 
    v-model:active="tabActive"
    color="orange">
      <template v-for="(value,key,index) in allCities" :key="key">
        <van-tab :title="value.title" >内容</van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCityStore } from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
  const router = useRouter()
  const searchValue= ref("")
  const tabActive = ref(0)
  const onCancel = ()=>{
    router.back()
  }

  const cityStore = useCityStore()
  cityStore.getAllCities()
  const {allCities} = storeToRefs(cityStore) 
  console.log(allCities)
</script>

<style lang="less" scoped>

</style>