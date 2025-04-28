<script setup>
import { ref, computed } from "vue";
import { useHead } from "#imports";
import useBlog from "~/stores/blog.pinia";
import useCore from "~/stores/core.pinia";

const blogPinia = useBlog();
const corePinia = useCore();
const { blogs } = storeToRefs(blogPinia);
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

const totalItems = ref(0);
const pageSize = ref(6);
const currentPage = ref(1);

function getAll() {
  blogPinia.getBlogs(
    { limit: pageSize.value, page: currentPage.value },
    (data) => {
      totalItems.value = data.count;
    }
  );
}

const onPageChange = (page) => {
  currentPage.value = page;
  getAll()
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  getAll();
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
    <a-spin :spinning="loadingUrl.has('blogs/')">
      <div
        class="grid grid-cols-4 mt-10 max-sm:mt-5 gap-x-15 max-2xl:gap-x-10 gap-y-6 max-xl:gap-x-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-5"
      >
        <BlogCard v-for="blog in blogs.results" :key="blog.id" :data="blog" />
      </div>
      <div class="flex justify-center py-10">
        <a-pagination
          :hideOnSinglePage="true"
          :current="currentPage"
          :total="totalItems"
          :page-size="pageSize"
          @change="onPageChange"
        />
      </div>
    </a-spin>
  </div>
</template>
