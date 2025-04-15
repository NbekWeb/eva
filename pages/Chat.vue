<script setup>
import { ref } from "vue";
const text = ref("");
</script>
<template>
  <div class="flex w-full h-[100dvh] bg-white">
    <Sidebar />
    <div class="flex flex-col flex-grow overflow-y-hidden">
      <div class="flex items-center py-10 max-2xl:py-5">
        <div
          class="flex items-center justify-center flex-grow text-2xl font-semibold text-blue-400 max-sm:hidden gap-15 max-2xl:text-xl"
        >
          <nuxt-link to="/"> Главная </nuxt-link>
          <nuxt-link to="/chat"> Задать вопрос </nuxt-link>
          <nuxt-link to="/blog"> Блог </nuxt-link>
        </div>
        <div
          class="flex items-center justify-center w-12 h-12 text-xl rounded-full logout text-whiting mr-7 max-2xl:mr-5 max-2xl:w-10 max-2xl:h-10 max-2xl:text-base"
        >
          <icon-logout />
        </div>
        <mobile-navbar />
      </div>
      <div
        class="flex flex-col flex-grow gap-5 pb-5 overflow-y-auto px-25 max-2xl:px-15"
      >
        <message v-for="i in 10" :key="i" />
        <message type="receiver" />
      </div>
      <div class="flex flex-col gap-3.5 px-25 max-2xl:px-15 pb-12">
        <div
          class="relative z-10 flex items-center justify-between px-10 py-5 bg-white rounded-3xl shadow-1"
        >
          <div class="flex flex-col text-gray-400 gap-3.5">
            <h4 class="text-xl">Купить запросы</h4>
            <p class="text-base">
              После использования бесплатного запроса пользователь может
              оплатить пакеты запросов
            </p>
          </div>
          <button
            class="flex items-center h-12 px-4 text-base text-white logout rounded-xl hover:opacity-90"
          >
            Посмотреть пакеты
          </button>
        </div>
        <div
          class="relative z-10 flex items-center justify-between gap-5 px-10 py-5 bg-white rounded-3xl shadow-1"
        >
          <a-textarea
            class="flex-grow overflow-y-auto border-none max-h-32"
            v-model:value="text"
            placeholder="Задайте вопрос..."
            auto-size
          />
          <button
            class="flex items-center justify-center w-12 h-12 text-xl rounded-full send text-whiting hover:opacity-90"
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
.ant-input:hover {
  border: none;
  box-shadow: none;
}
.send {
  background: rgba(86, 97, 246, 1);
  box-shadow: 0px 4px 8px 0px rgba(86, 97, 246, 0.5);
}
</style>
