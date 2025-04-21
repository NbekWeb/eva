<script setup>
import { ref, computed } from "vue";
import { useHead } from "#imports";
import useBlog from "~/stores/blog.pinia";
import useCore from "~/stores/core.pinia";

const blogPinia = useBlog();
const corePinia = useCore();
const route = useRoute();
const { blog } = storeToRefs(blogPinia);
const { loadingUrl } = storeToRefs(corePinia);

useHead({
  title: "Blog",
  meta: [
    { name: "description", content: "This is a description of my Nuxt page" },
    { name: "keywords", content: "nuxt, vue, meta tags, SEO" },
    { property: "og:title", content: "My Nuxt Page" },
    { property: "og:description", content: "Open Graph Description" },
  ],
});

onMounted(() => {
  blogPinia.getBlog(route.params.id);
});
</script>

<template>
  <div
    class="mx-auto bg-gray-200 custom-container px-15 max-xl:px-8 max-md:px-5"
  >
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
      <MobileNavbar class="z-20 sm:hidden" type="dark" />
    </div>
    <a-spin :spinning="loadingUrl.has('blogs/id')">
      <div class="mx-32 mt-6 max-2xl:mt-5 max-lg:mx-10 max-sm:mx-0">
        <h2
          class="text-dark-100 text-5xl max-2xl:text-4xl max-lg:text-3xl text-center font-semibold mb-12 max-2xl:mb-8 max-xl:mb-6 max-sm:mb-5"
        >
          {{ blog.title }}
        </h2>
        <img :src="blog.images?.[0]?.image" class="w-full h-auto" />
        <div
          v-html="blog.description"
          class="mt-10 max-2xl:mt-6 max-xl:mt-3"
        ></div>
      </div>
    </a-spin>
  </div>
</template>
