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
    <img
      :src="data.images?.[0]?.image"
      class="w-full rounded-3xl max-sm:rounded-2xl max-h-[250px] object-cover"
    />
    <p
      class="mt-5 mb-3 text-2xl max-sm:my-1.5 limit-2 max-2xl:text-xl max-2xl:mb-2 max-sm:text-lg"
    >
      {{ data.title }}
    </p>
    <nuxt-link
      :to="`/single-blog/${data.id}`"
      class="text-base flex font-semibold text-blue-200 max-2xl:text-sm"
    >
      Подробнее...
    </nuxt-link>
  </div>
</template>
