import { defineStore } from 'pinia'
import { getCityAll } from '@/service/modules/city'

export const useCityStore = defineStore("city", {
    state() {
        return {
            allScopes: {},
            currentCity: { cityName: "重庆" }
        }
    },
    actions: {
        async getAllCities() {

            const res = await getCityAll()

            this.allScopes = res.data.data
        }
    }
})