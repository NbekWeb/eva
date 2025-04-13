<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const isMobileNavOpen = ref(false);
const router = useRouter();

const openMenu = () => {
  isMobileNavOpen.value = true;
};
const closeMenu = () => {
  isMobileNavOpen.value = false;
};
defineExpose({
  closeMenu,
  openMenu,
  isMobileNavOpen,
});

const navLinks = [
  { name: "Главная", to: "/" },
  { name: "Задать вопрос", to: "/" },
  { name: "Блог", to: "/" },
];

const handleNavigation = (to) => {
  toggleMobileNav();
  router.push(to);
};
</script>
<template>
  <div
    class="fixed top-0 left-0 z-10 flex flex-col items-center justify-center w-screen h-screen gap-5 text-lg font-semibold transition-transform duration-500 ease-in-out bg-blue-300 sm:hidden"
    :class="isMobileNavOpen ? 'translate-y-0' : '-translate-y-full'"
  >
    <span
      v-for="(link, index) in navLinks"
      :key="index"
      class="cursor-pointer"
      @click="handleNavigation(link.to)"
    >
      {{ link.name }}
    </span>
  </div>
</template>
