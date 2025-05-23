import { defineStore } from "pinia";
import { api } from "@/utils/api.js";
import useCore from "@/stores/core.pinia.js";

const usePrice = defineStore("price", {
  state: () => ({
    prices: [],
  }),
  actions: {
    getPrices() {
      const core = useCore();
      core.loadingUrl.add("prices/");
      api({
        url: "prices/",
        method: "GET",
      })
        .then(({ data }) => {
          this.prices = data;
        })
        .catch(() => {})
        .finally(() => {
          core.loadingUrl.delete("prices/");
        });
    },
    getSucces(data, callback, erorCallback) {
      const core = useCore();
      core.loadingUrl.add("check-payment/");
      api({
        url: `/prices/check-payment/`,
        method: "POST",
        data
      })
        .then(({}) => {
          message.success("Платеж был успешным!");
          callback();
        })
        .catch(() => {
          message.error("Произошла ошибка при проверке платежа!");
        })
        .finally(() => {
          core.loadingUrl.delete("check-payment/");
          erorCallback();
        });
    },
    postPrice(id, callback) {
      const core = useCore();
      core.loadingUrl.add("/prices/payment/init/");
      api({
        url: `/prices/payment/init/${id}/`,
        method: "POST",
      })
        .then(({ data }) => {
          callback(data);
        })
        .catch(() => {})
        .finally(() => {
          core.loadingUrl.delete("/prices/payment/init/");
        });
    },
  },
});

export default usePrice;
