<script setup>
import { useHead } from "#imports";
import { useRouter } from "vue-router";
import usePrice from "~/stores/price.pinia";

const router = useRouter();
const pricePinia = usePrice();
const { prices } = storeToRefs(pricePinia);

const close = () => {
  router.push("/chat");
};

useHead({
  title: "Rate",
  meta: [
    { name: "description", content: "This is a description of my Nuxt page" },
    { name: "keywords", content: "nuxt, vue, meta tags, SEO" },
    { property: "og:title", content: "My Nuxt Page" },
    { property: "og:description", content: "Open Graph Description" },
  ],
});

onMounted(() => {
  pricePinia.getPrices();
});
</script>
<template>
  <div
    class="flex flex-col h-auto min-h-screen mx-auto overflow-y-auto custom-container px-15 max-xl:px-8 max-md:px-5"
  >
    <div
      @click="close"
      class="absolute z-10 flex items-center justify-center w-12 h-12 text-2xl rounded-full max-2xl:w-10 max-2xl:h-10 max-2xl:text-xl max-sm:top-3 max-sm:right-3 top-6 right-7 close-bg text-whiting hover:opacity-80 max-xl:text-sm max-xl:w-6 max-xl:h-6"
    >
      <IconClose />
    </div>
    <div class="mt-20 mx-auto max-w-[560px] text-black max-2xl:mt-10">
      <h3 class="text-4xl font-medium text-center max-xl:text-3xl">
        Выберите подходящий пакет
      </h3>
      <p class="px-4 mt-6 text-2xl text-center max-xl:text-lg">
        Выберите свой идеальный пакет – и

        <span class="text-blue-100"> получите максимум возможностей! </span>
      </p>
    </div>
    <div
      class="flex justify-center gap-10 mt-32 max-2xl:mt-10 max-2xl:gap-5 max-xl:flex-wrap"
    >
      <rate-card
        :class="i % 2 == 0 && 'mt-12 max-xl:mt-0'"
        :type="i % 2 != 0 ? 'blue' : 'white'"
        v-for="(price, i) in prices"
        :key="i"
        :data="price"
      />
      <!-- <rate-card type="blue" />
      <rate-card class="mt-12 max-xl:mt-0" /> -->
    </div>
    <p
      class="text-2xl mx-auto text-dark-200 max-w-[1070px] text-center justify-end mt-auto pt-10 pb-15 max-xl:py-7 max-xl:text-xl max-sm:text-sm"
    >
      <span class="font-medium text-blue-100">Ева</span> — это инновационный
      онлайн-сервис, который помогает пользователям получать ответы на вопросы,
      связанные со здоровьем, используя искусственный интеллект.
    </p>
    <div class="flex w-full bottom-bg h-[33vh] fixed bottom-0 left-0"></div>
  </div>
</template>
<style scoped>
.bottom-bg {
  background: #3f50e7;
  filter: blur(250px);
}
.close-bg {
  background: linear-gradient(180deg, #8b81ff 0%, #4b3ee8 100%);
}
</style>
