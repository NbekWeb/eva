<script setup>
const emit = defineEmits(["close"]);
function close() {
  emit("close");
}
</script>
<template>
  <div
    class="h-[100dvh] max-sm:w-full overflow-y-hidden flex-col flex w-[348px] rounded-r-2xl bg-white relative z-10"
  >
    <div
      class="flex flex-col pt-10 pb-5 border-b border-gray-300 px-7 gap-14 max-2xl:gap-5 max-2xl:pt-5 max-sm:pt-3 max-sm:px-5"
    >
      <div class="flex items-center justify-between">
        <img src="@/assets/img/logo.svg" class="h-9 max-sm:h-6" />
        <IconClose class="text-xl text-dark-200 sm:hidden" @click="close" />
      </div>
      <div class="flex items-center gap-2.5 h-10">
        <button
          class="flex hover:opacity-90 rounded-3xl items-center justify-center flex-grow text-lg text-white btn-new gap-2.5 h-full"
        >
          <IconPlus />
          <span class="text-base">Новый чать</span>
        </button>
        <button
          class="flex items-center justify-center w-10 h-full text-lg text-white rounded-full hover:opacity-90 btn-search"
        >
          <IconSearch />
        </button>
      </div>
    </div>
    <div
      class="flex flex-col flex-grow mb-3 overflow-y-auto scroll-container max-sm:mb-0"
    >
      <div
        class="flex items-center justify-between py-5 border-b border-gray-300 px-7 max-sm:px-5"
      >
        <span class="text-xs text-gray-500">Ваши разговоры</span>
        <span class="text-sm font-semibold text-blue-500 hover:cursor-pointer"
          >Очистить все</span
        >
      </div>
      <div class="flex flex-col gap-5 py-5 max-sm:py-2.5 max-sm:gap-2">
        <MsgCard v-for="i in 10" :key="i" />
        <MsgCard />
        <MsgCard />
        <MsgCard />
        <MsgCard />
        <MsgCard />
        <MsgCard />
        <MsgCard />
      </div>
    </div>
    <div class="flex justify-end px-5 pb-3">
      <div class="flex items-center gap-2">
        <span class="text-lg font-semibold text-red-600"> Выход </span>
        <div
          class="flex items-center justify-center w-8 h-8 text-sm rounded-full logout text-whiting sm:hidden"
        >
          <icon-logout />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-new {
  background: linear-gradient(180deg, #5661f6 0%, rgba(37, 51, 237, 0.8) 100%);
}
.btn-search {
  background: linear-gradient(180deg, #8b81ff 0%, #4b3ee8 100%);
}
</style>
