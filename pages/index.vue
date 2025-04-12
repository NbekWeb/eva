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
  <div
    class="w-full h-screen text-white bg-dark-180 overflow-y-hidden flex flex-col"
  >
    
    <div
      class="custom-container flex flex-col h-full px-15 max-xl:px-8 max-md:px-5 mx-auto flex-grow"
    >
      <div
        class="flex items-center border-b border-gray-500 py-9 justify-between max-lg:py-5 max-sm:py-3"
      >
        <nuxt-link to="/">
          <img src="@/assets/img/logo.svg" class="h-9 max-sm:h-6" />
        </nuxt-link>
        <div
          class="flex max-sm:hidden items-center justify-center flex-grow text-2xl font-semibold gap-15 max-2xl:text-xl"
        >
          <nuxt-link to="/"> Главная </nuxt-link>
          <nuxt-link to="/"> Задать вопрос </nuxt-link>
          <nuxt-link to="/"> Блог </nuxt-link>
        </div>
        <menuAnimation class="sm:hidden"/>
      </div>
      <div
        class="flex justify-between h-full gap-25 pt-15 pb-5 max-2xl:pt-10 max-xl:pt-5 flex-grow"
      >
        <div
          class="flex flex-col justify-between h-full pb-32 max-2xl:pb-24 max-xl:pb-15 max-lg:pb-10"
        >
          <div
            class="max-w-[500px] max-lg:max-w-max max-lg:flex-grow max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center"
          >
            <h1
              class="text-5xl font-bold text-blue-900 max-lg:text-center max-sm:text-3xl"
            >
              "Ева" — это инновационный онлайн-сервис
            </h1>
            <p
              class="text-base text-gray-100 my-9 max-lg:text-center max-sm:my-6 max-sm:text-sm"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
              nisl eu consectetur. Mi massa elementum odio eu viverra amet.
            </p>
            <button
              class="px-6 py-4 max-sm:py-2.5 text-sm font-bold transition duration-300 bg-white rounded text-dark-180 hover:bg-white/90 max-lg:max-w-max"
            >
              Задать вопрос
            </button>
          </div>
          <div
            class="flex max-sm:flex-wrap items-center text-base text-center gap-22 max-lg:justify-between max-lg:gap-15 max-sm:gap-3 max-sm:justify-center"
          >
            <div class="flex items-center gap-5 max-sm:gap-2.5">
              <span
                class="text-5xl font-medium text-whiting max-lg:text-4xl max-md:text-3xl"
              >
                9999
              </span>
              <span class="max-w-28 max-lg:max-w-max"
                >Активный пользователи</span
              >
            </div>
            <div class="flex items-center gap-5 max-sm:gap-2.5">
              <span
                class="text-5xl font-medium text-whiting max-lg:text-4xl max-md:text-3xl"
              >
                1M+
              </span>
              <span class="max-w-28 max-lg:max-w-max">Зарегриствуны люди </span>
            </div>
          </div>
        </div>
        <img
          src="@/assets/img/chip.png"
          class="py-15 max-2xl:py-5 max-xl:py-0 h-full max-h-full max-lg:hidden"
        />
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
