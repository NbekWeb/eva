import { defineStore } from "pinia";
import { api } from "@/utils/api.js";
import useCore from "@/stores/core.pinia.js";

const useChat = defineStore("chat", {
  state: () => ({
    chats: [],
    blog: {},
  }),
  actions: {
    getChat(callback) {
      const core = useCore();
      core.loadingUrl.add("chat");
      api({
        url: "chat/message/statistics/",
        method: "GET",
      })
        .then(({ data }) => {
          this.chats = data;
          callback(data)
        })
        .catch(() => {})
        .finally(() => {
          core.loadingUrl.delete("chat");
        });
    },
    createChat(callback) {
      const core = useCore();
      core.loadingUrl.add("chat");
      api({
        url: "chat/create/",
        method: "POST",
      })
        .then(({ data }) => {
          callback(data)
        })
        .catch(() => {})
        .finally(() => {
          core.loadingUrl.delete("chat");
        });
    },
    sendMsg(data,callback) {
      const core = useCore();
      core.loadingUrl.add("chat");
      api({
        url: `chat/${data.id}/`,
        method: "POST",
        data
      })
        .then(() => {
          callback()
        })
        .catch(() => {})
        .finally(() => {
          core.loadingUrl.delete("chat");
        });
    },
    getBlog(id) {
      const core = useCore();
      core.loadingUrl.add("chat");
      api({
        url: `blogs/list/${id}/`,
        method: "GET",
      })
        .then(({ data }) => {
          this.directory = data;
        })
        .catch(() => {})
        .finally(() => {
          core.loadingUrl.delete("chat");
        });
    },
  },
});

export default useChat;
