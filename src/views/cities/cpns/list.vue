<template>
  <div class="list">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <ul class="hot-cities">
        <template v-for="(city_item,city_index) in scopeCities.hotCities" :key="city_index">
          <li class="city" @click="selectCity(city_item)">
            {{city_item.cityName}}
          </li>
        </template>
      </ul>

      <template v-for="(kind_item,kind_index) in scopeCities.cities" :key="kind_index">
        <van-index-anchor :index="kind_item.group" />
        <template v-for="(city_item,city_index) in kind_item.cities" :key="city_index">
          <van-cell :title="city_item.cityName" @click="selectCity(city_item)"/>
        </template> 
      </template> 
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCityStore } from '@/stores/modules/city';
import { useRouter } from 'vue-router';
const props = defineProps({
  scopeCities:{
    type: Object,
    default:()=>({})
  }
})

const indexList = computed(()=>{
  const list = props.scopeCities.cities.map(item => item.group)
  list.unshift('#')
  return list
}) 
const router = useRouter()
const cityStore = useCityStore()
const selectCity = (city_item)=>{
  cityStore.currentCity = city_item
  router.back()
}

</script>

<style lang="less" scoped>
.hot-cities{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3px 20px 3px 6px;
  .city{
    width: 20%;
    font-size: 14px;

    margin: 6px 2px;
    color: rgb(55, 55, 55);
    background-color: rgba(255, 166, 0, 0.18);
    border-radius: 40%;
    text-align: center;
  }

}
</style>