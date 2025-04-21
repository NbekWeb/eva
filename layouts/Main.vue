<script setup lang="ts">
definePageMeta({
  layout: "main",
});
</script>
<template>
  <div class="mx-auto custom-container px-15 max-xl:px-8 max-md:px-5">
    <div
      class="flex items-center justify-between border-b border-gray-500 py-9 max-2xl:py-5 max-sm:py-3"
    >
      <nuxt-link to="/">
        <img src="@/assets/img/logo.svg" class="h-9 max-sm:h-6" />
      </nuxt-link>
      <div
        class="flex items-center justify-center flex-grow text-2xl font-semibold text-blue-400 max-sm:hidden gap-15 max-2xl:text-xl"
      >
        <nuxt-link to="/"> Главная </nuxt-link>
        <nuxt-link to="/chat"> Задать вопрос </nuxt-link>
        <nuxt-link to="/blog"> Блог </nuxt-link>
      </div>
      <MobileNavbar class="" type="dark" />
    </div>
    <nuxt-page />
  </div>
</template>
