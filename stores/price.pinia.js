import {
    defineStore
} from "pinia";
import {
    api
} from "@/utils/api.js";
import useCore from '@/stores/core.pinia.js'


const useBlog = defineStore('price', {
    state: () => ({
        price: [],
    }),
    actions: {
        getPrices() {
            const core = useCore()
            core.loadingUrl.add('blogs/list/')
            api({
                    url: 'blogs/list/',
                    method: 'GET',
                })
                .then(({
                    data
                }) => {
                    this.blogs = data


                })
                .catch(() => {})
                .finally(() => {
                    core.loadingUrl.delete('blogs/list/')
                })
        },
    }
})


export default useBlog