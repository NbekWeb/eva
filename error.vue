<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goMain=()=>{
    router.push('/')
}
</script>
<template>
  <div
    class="flex flex-col items-center justify-center w-full h-screen mx-auto overflow-y-auto px-15 max-xl:px-8 max-md:px-5 custom-container"
  >
    <img src="@/assets/img/404.png" class="h-72 max-sm:h-64" />
    <h3 class="text-3xl font-semibold mt-7 text-dark-200">
      Страница не найдена
    </h3>
    <p class="mt-5 mb-6 text-2xl font-medium text-center text-blue-400 max-sm:text-xl">
      К сожелению, страница которую вы ищете, не существует
    </p>
    <button @click="goMain" class="text-xl py-3.5 max-sm:py-2.5 px-14 rounded-lg text-white hover:opacity-80">
      Вернуться на главную
    </button>
  </div>
</template>
<style scoped>
button {
  background: linear-gradient(90deg, #459aff 0%, #6054ff 100%);
}
</style>
