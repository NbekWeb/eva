<script setup>
const isDropdownOpen = ref(false);
const handleScroll = () => {
  if (isDropdownOpen.value) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  const scrollContainer = document.querySelector(".scroll-container");
  scrollContainer?.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  const scrollContainer = document.querySelector(".scroll-container");
  scrollContainer?.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <div
    class="relative flex items-center h-10 pr-3 overflow-x-hidden transition duration-300 max-sm:px-5 pl-7 group hover:bg-blue-600/15 hover:cursor-pointer"
    :class="isDropdownOpen && 'bg-blue-600/15'"
  >
    <div class="flex items-center justify-between gap-2">
      <div class="flex items-center  gap-2.5 text-base ">
        <IconMsg
          class="transition duration-300 text-dark-100 min-w-max group-hover:text-blue-100"
          :class="isDropdownOpen && 'text-blue-100'"
        />
        <p
          class="flex text-gray-400 transition duration-300 limit-1 group-hover:text-blue-100"
          :class="isDropdownOpen && 'text-blue-100'"
        >
          Какие продукты помогут d sa  da s сниз ss sa a a итуровень сахара в крови? Какие
          продукты помогут снизитуровень сахара в крови?
        </p>
      </div>
      <div class="max-sm:hidden">
        
        <a-dropdown
          :open="isDropdownOpen"
          @openChange="(val) => (isDropdownOpen = val)"
          trigger="click"
        >
          <span @click.prevent class="flex items-center h-5 min-w-6">
            <IconDots
              class="text-gray-400 transition duration-300 opacity-0 min-w-max group-hover:opacity-100"
              :class="isDropdownOpen && 'opacity-100'"
            />
          </span>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1">
                <div class="flex gap-2.5 items-center text-base text-dark-200">
                  <IconDelete />
                  <span class="text-xs"> Удалить </span>
                </div>
              </a-menu-item>
              <a-menu-item key="2">
                <div class="flex gap-2.5 items-center text-base text-dark-200">
                  <IconEdit />
                  <span class="text-xs"> Переименовать </span>
                </div>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>
