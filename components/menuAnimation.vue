<template>
  <div
    id="container"
    @click="onMenuToggle"
    class="relative"
    :class="type === 'dark' ? 'dark' : 'whiting'"
  >
    <div id="icon-container" class="block w-6 h-6 cursor-pointer">
      <div
        :class="[iconClass, type === 'dark' ? 'bg-dark-200' : 'bg-whiting']"
        id="icon"
        class="absolute top-1/2 transform -translate-y-1/2 w-5 h-0.5 rounded transition-all ease-in-out duration-300"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "dark",
  },
});

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
  width: 20px;
  height: 2px;
  border-radius: 4px;
  transition: top ease 0.3s, transform ease 0.3s 0.3s, background 0.3s ease 0.3s;
}

.dark .icon-menu::before,
.dark .icon-menu::after,
.dark .icon-close::before,
.dark .icon-close::after {
  background: #222;
}

.whiting .icon-menu::before,
.whiting .icon-menu::after,
.whiting .icon-close::before,
.whiting .icon-close::after {
  background: #fefeff;
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
}

.icon-close::after {
  transform: rotate(-45deg);
  top: 0px;
}
</style>
