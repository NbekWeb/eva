<script setup>
import { useHead } from "#imports";
import MobileNavbar from "~/components/MobileNavbar.vue";
import usePrice from "~/stores/price.pinia";
import useCore from "~/stores/core.pinia";

const pricePinia = usePrice();
const corePinia = useCore();
const { loadingUrl } = storeToRefs(corePinia);
useHead({
  title: "Главная",
  meta: [
    { name: "description", content: "This is a description of my Nuxt page" },
    { name: "keywords", content: "nuxt, vue, meta tags, SEO" },
    { property: "og:title", content: "My Nuxt Page" },
    { property: "og:description", content: "Open Graph Description" },
  ],
});
const router = useRouter();
const mobileNavbarRef = ref();
const menuAnimation = ref();
const open = ref(false);

const openMenu = () => {
  open.value = !open.value;
  if (open.value) {
    mobileNavbarRef.value?.openMenu();
  } else {
    mobileNavbarRef.value?.closeMenu();
  }
};

const closeMenu = () => {
  openMenu();
  menuAnimation.value.onMenuToggle();
};

function goChat() {
  router.push("/chat");
}

function clear() {
  localStorage.removeItem("payment_id");
  localStorage.removeItem("order_id");
}

onMounted(() => {
  const payment_id = localStorage.getItem("payment_id");
  const order_id = localStorage.getItem("order_id");
  const customer_key = localStorage.getItem("customer_key");
  console.log(payment_id);
  if (payment_id && order_id) {
    pricePinia.getSucces(
      { payment_id, order_id, customer_key },
      () => {},
      () => {
        clear();
      }
    );
  }
});
</script>
<template>
  <a-spin :spinning="loadingUrl.has('check-payment/')">
    <div
      class="flex flex-col w-full h-[100dvh] overflow-hidden text-white bg-dark-180"
    >
      <div
        class="flex flex-col flex-grow h-full mx-auto custom-container px-15 max-xl:px-8 max-md:px-5"
      >
        <div
          class="flex items-center justify-between border-b border-gray-500 py-9 max-2xl:py-5 max-sm:py-3"
        >
          <nuxt-link to="/">
            <img src="@/assets/img/logo.svg" class="h-9 max-sm:h-6" />
          </nuxt-link>
          <div
            class="flex items-center justify-center flex-grow text-2xl font-semibold max-sm:hidden gap-15 max-2xl:text-xl"
          >
            <nuxt-link to="/"> Главная </nuxt-link>
            <nuxt-link to="/chat"> Задать вопрос </nuxt-link>
            <nuxt-link to="/blog"> Блог </nuxt-link>
          </div>
          <MobileNavbar class="z-20 sm:hidden" type="white" />
        </div>
        <div
          class="flex justify-between flex-grow h-full pb-5 gap-25 pt-15 max-2xl:pt-5"
        >
          <div
            class="flex flex-col justify-between h-full pb-20 max-2xl:pb-10 max-lg:pb-10"
          >
            <div
              class="max-w-[500px] max-lg:max-w-max max-lg:flex-grow max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center"
            >
              <h1
                class="text-5xl font-bold text-blue-900 max-lg:text-center max-sm:text-3xl"
              >
                "Ева" — это инновационный онлайн-сервис
              </h1>
              <p
                class="text-base text-gray-100 my-9 max-2xl:my-6 max-lg:text-center max-sm:my-6 max-sm:text-sm"
              >
      Просто задайте вопрос, и Ева подскажет, как заботиться о своем здоровье, улучшить самочувствие и повысить качество жизни
              </p>
              <button
                @click="goChat"
                class="px-6 py-4 max-2xl:px-4 text-sm font-bold transition hover:cursor-pointer max-2xl:py-2.5 duration-300 bg-white rounded text-dark-180 hover:bg-white/90 max-lg:max-w-max"
              >
                Задать вопрос
              </button>
            </div>
            <div
              class="flex items-center text-base text-center max-sm:flex-wrap max-2xl:text-sm gap-22 max-lg:justify-between max-lg:gap-15 max-sm:gap-3 max-sm:justify-center"
            >
              <div class="flex items-center gap-5 max-sm:gap-2.5">
                <span
                  class="text-5xl font-medium text-whiting max-2xl:text-3xl"
                >
                  1000+
                </span>
                <span class="max-w-28 max-lg:max-w-max"
                  >Активный пользователи</span
                >
              </div>
            </div>
          </div>
          <div class="flex items-start p-10 max-lg:hidden max-md:p-0">

            <img
              src="@/assets/img/logo.png"
              class="h-auto  w-full object-contain max-w-full flex  overflow-hidden  "
            />
          </div>
        </div>
      </div>
      <div class="fixed bottom-0 left-0 w-full h-36 bl-liner"></div>
    </div>
  </a-spin>
</template>
<style scoped>
.bl-liner {
  background: linear-gradient(
    90deg,
    #44bcff -0.55%,
    #44b0ff 22.86%,
    #5661f6 48.36%,
    #1d19ff 73.33%,
    #5661f6 99.34%
  );
  filter: blur(100px);
  opacity: 0.4;
}
</style>
