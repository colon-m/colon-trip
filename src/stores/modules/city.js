import { defineStore } from 'pinia'
import { getCityAll } from '@/service/modules/city'

export const useCityStore = defineStore("city", {
    state() {
        return {
            allCities: {}
        }
    },
    actions: {
        async getAllCities() {
            const res = await getCityAll()
            this.allCities = res.data.data
        }
    }
})