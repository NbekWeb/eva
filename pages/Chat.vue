<script setup>
import useChat from "@/stores/chat.pinia";
import useCore from "~/stores/core.pinia";
import { useRouter } from "vue-router";

const chatPinia = useChat();
const corePinia = useCore();

const { loadingUrl } = storeToRefs(corePinia);

const router = useRouter();
const { chats, chat } = storeToRefs(chatPinia);
const text = ref("");
const open = ref(false);
const loading = ref(false);
const messagesContainer = ref(null);

const toggleOpen = () => {
  open.value = !open.value;
};

const onClose = () => {
  open.value = false;
};
function logout() {
  localStorage.removeItem("access_token");
  router.push("/");
}
function scrollToBottom() {
  if (messagesContainer.value) {
    setTimeout(() => {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }, 500);
  }
}

function goRate() {
  router.push("/rate");
}
function sendMsg() {
  const newMsg = {
    question: text.value,
    answer: {
      answer: "",
      loading: true,
    },
  };

  if (!chat.value?.message_list) {
    chat.value = {
      message_list: [newMsg],
    };
  } else {
    chat.value.message_list.unshift(newMsg);
  }
  setTimeout(() => {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }, 100);

  if (text.value.length > 0 && !loading.value) {
    loading.value = true;
    if (!router.currentRoute.value.query.chat) {
      chatPinia.createChat((id) => {
        router.replace({
          path: router.currentRoute.value.path,
          query: {
            ...router.currentRoute.value.query,
            chat: id,
          },
        });
        chatPinia.sendMsg(
          { id, message: text.value },
          (chatId) => {
            text.value = "";
            chatPinia.postAnswer(chatId, () => {
              setTimeout(() => {
                chatPinia.getChat(router.currentRoute.value.query.chat, () => {
                  loading.value = false;
                  scrollToBottom();
                });
              }, 5000);
            });
          },
          () => {
            router.push("/rate");
          }
        );
      });
    } else {
      chatPinia.sendMsg(
        { id: router.currentRoute.value.query.chat, message: text.value },
        (chatId) => {
          text.value = "";
          chatPinia.postAnswer(chatId, () => {
            setTimeout(() => {
              chatPinia.getChat(router.currentRoute.value.query.chat, () => {
                loading.value = false;
                scrollToBottom();
              });
            }, 5000);
          });
        },
        () => {
          router.push("/rate");
        }
      );
    }
  }
}

watch(
  () => router.currentRoute.value.query.chat,
  (newChat) => {
    if (newChat) {
      chatPinia.getChat(newChat);
    }
  },
  { immediate: true }
);
onMounted(() => {
  chatPinia.getChats(() => {});

});
</script>

<template>
  <a-spin
    :spinning="
      (loadingUrl.has('chats') ||
        loadingUrl.has('chat') ||
        loadingUrl.has('chat/answer')) &&
      !loading
    "
  >
    <div class="flex w-full bg-white h-dvh">
      <Sidebar class="max-lg:hidden" />
      <a-drawer
        width="auto"
        title=""
        placement="left"
        :open="open"
        @close="onClose"
      >
        <Sidebar @close="onClose" :data="chats" />
      </a-drawer>

      <div class="flex flex-col flex-grow overflow-y-hidden">
        <div
          class="flex items-center py-10 max-2xl:py-5 max-lg:px-8 max-md:px-5 max-sm:justify-between"
        >
          <div class="text-3xl text-dark-200 sm:hidden" @click="toggleOpen">
            <IconCollapse />
          </div>
          <div class="flex items-center gap-4 lg:hidden">
            <div
              class="text-3xl text-dark-200 max-sm:hidden"
              @click="toggleOpen"
            >
              <IconCollapse />
            </div>
            <nuxt-link to="/">
              <img src="@/assets/img/logo.svg" class="max-sm:h-6" />
            </nuxt-link>
          </div>
          <div
            class="flex items-center justify-center flex-grow text-2xl font-semibold text-blue-400 max-sm:hidden gap-15 max-2xl:text-xl max-2xl:gap-10 max-lg:gap-5"
          >
            <nuxt-link to="/"> Главная </nuxt-link>
            <nuxt-link to="/chat"> Задать вопрос </nuxt-link>
            <nuxt-link to="/blog"> Блог </nuxt-link>
          </div>
          <div
            @click="logout"
            class="flex items-center hover:cursor-pointer justify-center w-12 h-12 text-xl rounded-full logout text-whiting mr-7 max-2xl:mr-5 max-2xl:w-10 max-2xl:h-10 max-2xl:text-base max-sm:hidden"
          >
            <icon-logout />
          </div>
          <mobile-navbar />
        </div>
        <div
          ref="messagesContainer"
          class="relative z-10 flex flex-col flex-grow gap-5 pb-5 overflow-y-auto px-25 max-2xl:px-15 max-xl:px-8 max-md:px-5"
        >
          <div
            v-if="
              !router.currentRoute.value.query.chat ||
              chats?.message_list?.length == 0
            "
            class="flex justify-center items-center max-md:text-3xl text-center h-full text-dark-400 font-medium text-4xl"
          >
            Чем я могу помочь?
          </div>

          <template v-else>
            <template
              v-for="(item, i) in [...(chat?.message_list || [])].reverse()"
              :key="i"
            >
              <message :data="item?.question" />
              <message :data="item?.answer?.answer" type="reciever" />
            </template>
          </template>
        </div>
        <div
          class="flex flex-col gap-3.5 px-25 max-2xl:px-15 pb-12 max-xl:pb-6 max-sm:pb-4 max-xl:px-8 max-md:px-5"
        >
          <div
            class="relative z-10 flex items-center justify-between px-10 py-5 bg-white max-sm:flex-col rounded-3xl shadow-1 max-2xl:px-5 max-sm:p-3 max-sm:rounded-xl max-sm:gap-3"
          >
            <div class="flex flex-col text-gray-400 gap-3.5 max-sm:gap-2">
              <h4 class="text-xl font-semibold max-sm:text-base">
                Купить запросы
              </h4>
              <p class="text-base max-2xl:text-sm max-sm:text-xs">
                После использования бесплатного запроса пользователь может
                оплатить пакеты запросов
              </p>
            </div>
            <button
              @click="goRate"
              class="flex items-center justify-center h-12 px-4 text-base text-white max-sm:h-10 max-sm:w-full min-w-max max-xl:text-sm logout rounded-xl hover:opacity-90 max-sm:rounded-md"
            >
              Посмотреть пакеты
            </button>
          </div>
          <div
            class="relative z-10 flex items-center justify-between gap-5 px-10 py-5 bg-white max-sm:rounded-xl max-sm:p-3 rounded-3xl shadow-1"
          >
            <a-textarea
              class="flex-grow overflow-y-auto text-base border-none outline-none max-h-32"
              v-model:value="text"
              placeholder="Задайте вопрос..."
              auto-size
            />

            <button
              @click="sendMsg"
              class="flex items-center justify-center w-12 h-12 text-xl rounded-full min-w-12 send text-whiting hover:opacity-90"
            >
              <IconSend />
            </button>
          </div>
        </div>
      </div>
      <div class="fixed bottom-0 left-0 w-full side-bar"></div>
    </div>
  </a-spin>
</template>
<style>
.side-bar {
  height: 33vh;
  filter: blur(200px);
  background: #3f50e7;
}
.logout {
  background: linear-gradient(180deg, #8b81ff 0%, #4b3ee8 100%);
}
.shadow-1 {
  box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.1);
}
.ant-input:hover,
.ant-input:focus,
.ant-input-focused {
  border: none !important;
  box-shadow: none !important;
}
.send {
  background: rgba(86, 97, 246, 1);
  box-shadow: 0px 4px 8px 0px rgba(86, 97, 246, 0.5);
}
.ant-drawer .ant-drawer-header {
  display: none;
}
.ant-drawer .ant-drawer-body {
  padding: 0 !important;
  overflow-y: hidden !important;
}
</style>
