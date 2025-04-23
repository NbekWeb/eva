import { defineStore } from "pinia";
import { api } from "@/utils/api.js";
import useCore from "@/stores/core.pinia.js";

const useChat = defineStore("chat", {
  state: () => ({
    chats: [],
    chat: {},
  }),
  actions: {
    getChats(callback) {
      const core = useCore();
      core.loadingUrl.add("chat");
      api({
        url: "chat/chat_history/statistics/",
        method: "GET",
      })
        .then(({ data }) => {
          this.chats = data;
          callback(data);
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
          callback(data.id);
        })
        .catch(() => {})
        .finally(() => {
          core.loadingUrl.delete("chat");
        });
    },
    sendMsg(data, callback, errorCallback) {
      const core = useCore();
      core.loadingUrl.add("chat");
      api({
        url: `chat/${data.id}/`,
        method: "POST",
        data,
      })
        .then(({ data }) => {
          callback(data.message_id);
        })
        .catch((error) => {
          message.error(error.response.data.message);
          errorCallback();
        })
        .finally(() => {
          core.loadingUrl.delete("chat");
        });
    },
    getChat(id,callback=()=>{}) {
      const core = useCore();
      core.loadingUrl.add("chat");
      api({
        url: `chat/detail/${id}/`,
        method: "GET",
      })
        .then(({ data }) => {
          this.chat = data;
          callback()
        })
        .catch(() => {})
        .finally(() => {
          core.loadingUrl.delete("chat");
        });
    },
    postAnswer(id,callback) {
      const core = useCore();
      core.loadingUrl.add("chat/answer");
      api({
        url: `chat/message/answer/${id}/`,
        method: "GET",
      })
        .then(() => {
          callback()
        })
        .catch((err) => {
          console.error('Error:', err);
        })
        .finally(() => {
          core.loadingUrl.delete("chat/answer");
        });
    },
  },
});

export default useChat;
