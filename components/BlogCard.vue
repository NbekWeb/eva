<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div>
    <img :src="data.images?.[0]?.image" class="w-full rounded-3xl max-sm:rounded-2xl" />
    <p class="mt-5 mb-3 text-2xl max-sm:mt-3 limit-2 max-2xl:text-xl max-2xl:mb-2">
      {{ data.title }}
    </p>
    <nuxt-link :to="`/single-blog/${data.id}`" class="text-base font-semibold text-blue-200 max-2xl:text-sm "> Подробнее... </nuxt-link>
  </div>
</template>
