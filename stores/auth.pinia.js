// import { defineStore } from "pinia";
import { api } from "@/utils/api.js";
import useCore from "@/stores/core.pinia.js";

const useAuth = defineStore("auth", {
  actions: {
    postRegis(data, callback) {
      const core = useCore();
      core.loadingUrl.add("accounts/signup/");
      api({
        url: "accounts/signup/",
        method: "POST",
        data,
      })
        .then(() => {
          message.success("Пользователь успешно создан!");
          callback();
        })
        .catch((error) => {
          if (error.response.data.detail) {
            message.error(error.response.data.detail);
          } else {
            message.error("Что-то пошло не так!");
          }
        })
        .finally(() => {
          core.loadingUrl.delete("accounts/signup");
        });
    },
    postLogin(data, callback) {
      const core = useCore();
      core.loadingUrl.add("accounts/signin/");
      api({
        url: "accounts/signin/",
        method: "POST",
        data,
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access);
          callback();
        })
        .catch((error) => {
          if (error?.response?.data?.detail) {
            message.error(error.response.data.detail);
          } else {
            message.error("Что-то пошло не так!");
          }
        })
        .finally(() => {
          core.loadingUrl.delete("accounts/login");
        });
    },
    postLoginVk(data, callback, erorCallback) {
      const core = useCore();
      core.loadingUrl.add("account/auth/check/vk/");
      api({
        url: "account/auth/check/vk/",
        method: "POST",
        data,
      })
        .then(({ data }) => {
          this.postVk(
            {
              access_token: data.access_token,
            },
            callback,
            erorCallback
          );
        })
        .catch((error) => {
          erorCallback();
          message.error("Что-то пошло не так!");
        })
        .finally(() => {
          core.loadingUrl.delete("account/auth/check/vk/");
        });
    },
    postVk(data, callback, erorCallback) {
      const core = useCore();
      core.loadingUrl.add("account/auth/vk/");
      api({
        url: "account/auth/vk/",
        method: "POST",
        data,
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          callback();
        })
        .catch((error) => {
          erorCallback();
          message.error("Что-то пошло не так!");
        })
        .finally(() => {
          core.loadingUrl.delete("account/auth/check/vk/");
        });
    },
  },
});

export default useAuth;
