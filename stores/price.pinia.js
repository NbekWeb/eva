import {
    defineStore
} from "pinia";
import {
    api
} from "@/utils/api.js";
import useCore from '@/stores/core.pinia.js'


const usePrice = defineStore('price', {
    state: () => ({
        prices: [],
    }),
    actions: {
        getPrices() {
            const core = useCore()
            core.loadingUrl.add('prices/')
            api({
                    url: 'prices/',
                    method: 'GET',
                })
                .then(({
                    data
                }) => {
                    this.prices = data


                })
                .catch(() => {})
                .finally(() => {
                    core.loadingUrl.delete('prices/')
                })
        },
    }
})


export default usePrice