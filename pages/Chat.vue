<script setup>
import { ref } from "vue";
const text = ref("");
const open = ref(false);

const toggleOpen = () => {
  open.value = !open.value;
};

const onClose = () => {
  open.value = false;
};
</script>
<template>
  <div class="flex w-full bg-white h-dvh">
    <Sidebar class="max-lg:hidden" />
    <a-drawer
      width="auto"
      title=""
      placement="left"
      :open="open"
      @close="onClose"
    >
      <Sidebar @close="onClose" />
    </a-drawer>

    <div class="flex flex-col flex-grow overflow-y-hidden">
      <div
        class="flex items-center py-10 max-2xl:py-5 max-lg:px-8 max-md:px-5 max-sm:justify-between"
      >
        <div class="text-3xl text-dark-200 sm:hidden" @click="toggleOpen">
          <IconCollapse />
        </div>
        <div class="flex items-center gap-4 lg:hidden">
          <div class="text-3xl text-dark-200 max-sm:hidden" @click="toggleOpen">
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
          class="flex items-center justify-center w-12 h-12 text-xl rounded-full logout text-whiting mr-7 max-2xl:mr-5 max-2xl:w-10 max-2xl:h-10 max-2xl:text-base max-sm:hidden"
        >
          <icon-logout />
        </div>
        <mobile-navbar />
      </div>
      <div
        class="relative z-10 flex flex-col flex-grow gap-5 pb-5 overflow-y-auto px-25 max-2xl:px-15 max-xl:px-8 max-md:px-5"
      >
        <message v-for="i in 10" :key="i" />
        <message type="receiver" />
      </div>
      <div
        class="flex flex-col gap-3.5 px-25 max-2xl:px-15 pb-12 max-xl:pb-6 max-sm:pb-4 max-xl:px-8 max-md:px-5"
      >
        <div
          class="relative z-10 flex items-center justify-between px-10 py-5 bg-white max-sm:flex-col rounded-3xl shadow-1 max-2xl:px-5 max-sm:p-3 max-sm:rounded-xl max-sm:gap-3"
        >
          <div class="flex flex-col text-gray-400 gap-3.5 max-sm:gap-2">
            <h4 class="text-xl font-semibold max-sm:text-base">Купить запросы</h4>
            <p class="text-base max-2xl:text-sm max-sm:text-xs">
              После использования бесплатного запроса пользователь может
              оплатить пакеты запросов
            </p>
          </div>
          <button
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
            class="flex items-center justify-center w-12 h-12 text-xl rounded-full min-w-12 send text-whiting hover:opacity-90"
          >
            <IconSend />
          </button>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full side-bar"></div>
  </div>
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
