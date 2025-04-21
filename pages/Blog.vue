<script setup>
import { ref, computed } from "vue";
import { useHead } from "#imports";
import useBlog from "~/stores/blog.pinia";

const blogPinia = useBlog();
const { blogs } = storeToRefs(blogPinia);

useHead({
  title: "Blog",
  meta: [
    { name: "description", content: "This is a description of my Nuxt page" },
    { name: "keywords", content: "nuxt, vue, meta tags, SEO" },
    { property: "og:title", content: "My Nuxt Page" },
    { property: "og:description", content: "Open Graph Description" },
  ],
});

const totalItems = 45;
const pageSize = ref(12);
const currentPage = ref(1);

// const blogs = ref(
//   Array.from({ length: totalItems }, (_, i) => ({ id: i + 1 }))
// );

const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return blogs.value.slice(start, start + pageSize.value);
});

const onPageChange = (page) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  blogPinia.getBlogs();
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
    <div
      class="grid grid-cols-4 mt-10 max-sm:mt-5 gap-x-15 max-2xl:gap-x-10 gap-y-6 max-xl:gap-x-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-5"
    >
      {{ blogs }}
      <BlogCard v-for="blog in blogs.results" :key="blog.id" />
    </div>
    <div class="flex justify-center py-10">
      <a-pagination
        :current="currentPage"
        :total="blogs.length"
        :page-size="pageSize"
        @change="onPageChange"
      />
    </div>
  </div>
</template>
