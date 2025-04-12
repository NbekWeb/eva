<template>
  <div id="container" @click="onMenuToggle" class="relative">
    <h1 id="icon-container" class="cursor-pointer block h-6 w-6">
      <div
        :class="iconClass"
        id="icon"
        class="absolute top-1/2 transform -translate-y-1/2 w-6 h-0.5 rounded bg-dark-200 transition-all ease-in-out duration-300"
      ></div>
    </h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

const iconClass = ref("icon-menu");
const menuOpen = ref(false);
const emit = defineEmits(["toggleMenu"]);

const onMenuToggle = () => {
  menuOpen.value = !menuOpen.value;
  iconClass.value = menuOpen.value ? "icon-close" : "icon-menu";
  emit("toggleMenu", menuOpen.value);
};
</script>

<style scoped>
.icon-menu::before,
.icon-menu::after,
.icon-close::before,
.icon-close::after {
  content: "";
  display: block;
  position: absolute;
  width: 24px;
  height: 2px;
  border-radius: 4px;
  transition: top ease 0.3s, transform ease 0.3s 0.3s, background 0.3s ease 0.3s;
  background: #222;
}

.icon-menu::before {
  top: -7px;
  transition: background ease 0.3s, top ease 0.3s 0.3s, transform ease 0.3s;
}

.icon-menu::after {
  top: 7px;
  transition: background ease 0.3s, top ease 0.3s 0.3s, transform ease 0.3s;
}

.icon-close {
  background: transparent;
}

.icon-close::before {
  transform: rotate(45deg);
  top: 0px;
  background: #222;
}

.icon-close::after {
  transform: rotate(-45deg);
  top: 0px;
  background: #222;
}
</style>
