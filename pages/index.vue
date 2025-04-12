<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  title: "Главная",
  meta: [
    { name: "description", content: "This is a description of my Nuxt page" },
    { name: "keywords", content: "nuxt, vue, meta tags, SEO" },
    { property: "og:title", content: "My Nuxt Page" },
    { property: "og:description", content: "Open Graph Description" },
  ],
});
</script>
<template>
  <div class="w-full h-screen text-white bg-dark-180">
    <div class="container flex flex-col h-full px-5 mx-auto ">
      <div class="flex items-center border-b border-gray-500 py-9">
        <nuxt-link to="/">
          <img src="@/assets/img/logo.svg" class="h-9" />
        </nuxt-link>
        <div
          class="flex items-center justify-center flex-grow text-2xl font-semibold gap-15 max-2xl:text-xl"
        >
          <nuxt-link to="/"> Главная </nuxt-link>
          <nuxt-link to="/"> Задать вопрос </nuxt-link>
          <nuxt-link to="/"> Блог </nuxt-link>
        </div>
      </div>
      <div class="flex justify-between flex-grow h-full gap-25 pt-15">
        <div class="flex flex-col justify-between h-full pb-32 ">
          <div class="max-w-[500px]">
            <h1 class="text-5xl font-bold text-blue-900">
              "Ева" — это инновационный онлайн-сервис
            </h1>
            <p class="text-base text-gray-100 my-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
              nisl eu consectetur. Mi massa elementum odio eu viverra amet.
            </p>
            <button
              class="px-6 py-4 text-sm font-bold transition duration-300 bg-white rounded text-dark-180 hover:bg-white/90"
            >
              Задать вопрос
            </button>
          </div>
          <div class="flex items-center text-base text-center gap-22">
            <div class="flex items-center gap-5">
              <span class="text-5xl font-medium text-whiting"> 9999 </span>
              <span class="max-w-28">Активный пользователи</span>
            </div>
            <div class="flex items-center gap-5">
              <span class="text-5xl font-medium text-whiting"> 1M+ </span>
              <span class="max-w-28">Зарегриствуны люди </span>
            </div>
          </div>
        </div>
        <div class="h-full py-15">
          <img
            src="@/assets/img/chip.png"
            class="object-contain w-auto h-full max-h-full"
          />
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full h-36 bl-liner"></div>
  </div>
</template>
<style scoped>
.bl-liner {
  background: linear-gradient(
    90deg,
    #44bcff -0.55%,
    #44b0ff 22.86%,
    #5661f6 48.36%,
    #1d19ff 73.33%,
    #5661f6 99.34%
  );
  filter: blur(100px);
  opacity: 0.4;
}
</style>
