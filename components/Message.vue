<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "send",
  },
});
</script>
<template>
  <div class="grid w-full grid-cols-2 gap-20">
    <div class=""></div>
    <div
      class="relative z-10 p-5 text-base bg-white rounded-3xl msg"
      :class="type == 'send' && 'order-first'"
    >
      sao
    </div>
  </div>
</template>
<style scoped>
.msg {
  box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.1);
}
</style>
