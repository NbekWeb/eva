<script setup>
const config = useRuntimeConfig()
const apiUrl = ref(config.NUXT_PUBLIC_API_URL)
</script>

<template>
  <div>
    {{apiUrl}}
    <img src="@/assets/img/blog.jfif" class="w-full rounded-3xl max-sm:rounded-2xl" />
    <p class="mt-5 mb-3 text-2xl max-sm:mt-3 limit-2 max-2xl:text-xl max-2xl:mb-2">
      Привет привет привет привет привет привет привет Привет привет привет
      привет привет привет привет
    </p>
    <nuxt-link to="/" class="text-base font-semibold text-blue-200 max-2xl:text-sm "> Подробнее... </nuxt-link>
  </div>
</template>
