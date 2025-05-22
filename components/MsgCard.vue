<script setup>
import useChat from "~/stores/chat.pinia";
const isDropdownOpen = ref(false);
const emit = defineEmits(["close", "openNewChat"]);
const router = useRouter();
const chatPinia = useChat();
function close() {
  emit("close");
}
const handleScroll = () => {
  if (isDropdownOpen.value) {
    isDropdownOpen.value = false;
  }
};

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

function goChat(id) {
  router.push({
    path: router.currentRoute.value.path,
    query: { ...router.currentRoute.value.query, chat: id },
  });
  close();
}

function deleteChat(id) {
  isDropdownOpen.value = false;
  chatPinia.deleteChat(id, () => {
    message.success("Чат удален!");
    emit("openNewChat");
  });
}

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
    @click="goChat(data.id)"
    class="relative flex items-center h-10 pr-3 overflow-x-hidden transition duration-300 max-sm:px-5 pl-7 group hover:bg-blue-600/15 hover:cursor-pointer"
    :class="isDropdownOpen && 'bg-blue-600/15'"
  >
    <div class="flex items-center justify-between gap-2 w-full">
      <div class="flex items-center gap-2.5 text-base">
        <IconMsg
          class="transition duration-300 text-dark-100 min-w-max group-hover:text-blue-100"
          :class="isDropdownOpen && 'text-blue-100'"
        />
        <p
          class="flex text-gray-400 transition duration-300 limit-1 group-hover:text-blue-100"
          :class="isDropdownOpen && 'text-blue-100'"
        >
          {{ data?.first_msg?.question }}
        </p>
      </div>
      <div class="">
        <a-dropdown
          :open="isDropdownOpen"
          @openChange="(val) => (isDropdownOpen = val)"
          trigger="click"
        >
          <span @click.stop class="flex items-center h-5 min-w-6">
            <IconDots
              class="text-gray-400 transition duration-300 opacity-0 min-w-max group-hover:opacity-100 max-lg:opacity-100"
              :class="isDropdownOpen && 'opacity-100'"
            />
          </span>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" @click="deleteChat(data.id)">
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
