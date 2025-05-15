// import { defineStore } from "pinia";
import { api } from "@/utils/api.js";
import useCore from "@/stores/core.pinia.js";
import { message } from "ant-design-vue";

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
          console.log(error?.response?.data)
          if (error?.response?.data?.detail) {
            message.error(error?.response?.data?.detail);
          } else if (error?.response?.data?.email) {
            message.error(error?.response?.data?.email);
          } else if (error?.response?.data?.username) {
            message.error(error?.response?.data?.usernameß);
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
        url: "accounts/auth/check/vk/",
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
        url: "accounts/auth/vk/",
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
    postGoogle(data, callback, erorCallback) {
      const core = useCore();
      core.loadingUrl.add("google/");
      api({
        url: "accounts/auth/google/",
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
          core.loadingUrl.delete("google/");
        });
    },
    getGoogle(callback) {
      const core = useCore();
      core.loadingUrl.add("google/");
      api({
        url: "accounts/auth/google/",
        method: "GET",
      })
        .then(({ data }) => {
          callback(data.auth_url);
        })
        .catch((error) => {})
        .finally(() => {
          core.loadingUrl.delete("google");
        });
    },
    getVk(callback) {
      const core = useCore();
      core.loadingUrl.add("vk");
      api({
        url: "accounts/auth/vk/sign-in-url/",
        method: "GET",
      })
        .then(({ data }) => {
          callback(data.sign_in_url);
        })
        .catch((error) => {})
        .finally(() => {
          core.loadingUrl.delete("vk");
        });
    },
  },
});

export default useAuth;
