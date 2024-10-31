<template>
  <div class="list">
    <van-index-bar>
      <template v-for="(kind_item,kind_index) in scopeCities" :key="kind_index">
        <view>
          <van-index-anchor :index="kind_item.group" />
          <template v-for="(city_item,city_index) in kind_item.cities" :key="city_index">
            <van-cell :title="city_item.cityName" />
          </template> 
        </view>
      </template> 
    </van-index-bar>
  </div>
</template>

<script setup>

const props = defineProps({
  scopeCities:{
    type: Object,
    default:()=>{return {}}
  }
})
</script>

<style scoped>

</style>