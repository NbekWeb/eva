<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "send",
  },
  data: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="grid w-full grid-cols-2 gap-20 max-lg:gap-10 max-md:gap-5 max-sm:grid-cols-5">
    <div class=""></div>
    <div
      class="relative z-10 p-5 text-base bg-white rounded-3xl msg max-sm:col-span-4"
      :class="type == 'send' && 'order-first'"
    >
      {{ data }}
      <div v-if="!data" class="dots-loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.msg {
  box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.1);
}
.dots-loader {
  display: flex;
  gap: 5px;
  justify-content: start;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  background: #333;
  border-radius: 50%;
  opacity: 0;
  animation: blink 1.5s infinite;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
}
.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    transform: translateY(-5px);
  }
  40% {
    opacity: 0;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
  }
}
</style>
