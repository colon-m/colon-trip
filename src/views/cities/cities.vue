<template>
  <div class="cities">
    <van-search 
    v-model="value"  
    placeholder="请输入搜索关键词"
    show-action
    @cancel="onCancel"
    shape="round"/>
    <van-tabs 
    v-model:active="active"
    color="orange">
      <van-tab title="国内·港澳台">内容 1</van-tab>
      <van-tab title="海外">内容 2</van-tab>

    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
  const router = useRouter()
  const value= ref("")
  const onCancel = ()=>{
    router.back()
  }
</script>

<style lang="less" scoped>

</style>