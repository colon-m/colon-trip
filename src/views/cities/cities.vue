<template>
  <div class="cities">
    <div class="header">
      <van-search 
      v-model="searchValue"  
      placeholder="请输入搜索关键词"
      show-action
      @cancel="onCancel"
      shape="round"/>
      <van-tabs 
      v-model:active="tabActive"
      color="orange">
        <template v-for="(value,key,index) in allScopes" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <template v-for="oneScope in allScopes">
        <list v-show="currentScope?.title === oneScope?.title" :scopeCities="currentScope?.cities"/>
      </template>
      
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCityStore } from '@/stores/modules/city';
import { storeToRefs } from 'pinia';

import list from './cpns/list.vue';
  const router = useRouter()
  const searchValue= ref("")
  const tabActive = ref("")
  const onCancel = ()=>{
    router.back()
  }

  const cityStore = useCityStore()
  cityStore.getAllCities()
  const {allScopes} = storeToRefs(cityStore) 
  const currentScope = computed(()=>allScopes.value[tabActive.value])
</script>

<style lang="less" scoped>
.header{
  --van-tabs-line-height:26px;
  position: relative;
  z-index: 99;
}
.content{
  height: calc(100vh - 80px);
  overflow-y:auto;
}
</style>