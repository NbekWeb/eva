<script setup>
import usePrice from "~/stores/price.pinia";

const pricePinia=usePrice()
const props = defineProps({
  type: {
    type: String,
    default: "white",
  },
  data: {
    type: Object,
    default: {},
  },
});

function buy() {
  pricePinia.postPrice(props.data.id, (data) => {
    localStorage.setItem("payment_id", data.payment_id);
    localStorage.setItem("order_id", data.order_id);
    window.location.href = data.payment_url;
  });
}
</script>
<template>
  <div
    class="w-[375px] max-sm:w-full max-sm:h-[280px] relative z-10 h-[335px] rounded py-6 px-5 flex flex-col justify-between"
    :class="
      type == 'white' ? 'bg-white text-dark-180' : 'bg-blue-100 text-white'
    "
  >
    <div>
      <h4 class="text-xl font-bold max-sm:text-lg">{{ data.title }}</h4>

      <p
        class="mt-2.5 text-base max-sm:text-sm"
        :class="type == 'white' ? 'text-gray-600' : ' opacity-80'"
      >
        {{ data.description }}
      </p>
    </div>
    <div class="mb-4.5">
      <div
        class="flex items-center gap-2 mb-6"
        :class="type == 'white' && 'text-dark-200'"
      >
        <span class="text-6xl font-semibold max-sm:text-4xl"
          >&#8381;{{ Math.floor(data.price) }}</span
        >
        <span class="text-base">/ {{ data.count_typing }} запрос</span>
      </div>
      <button
        @click="buy"
        class="flex items-center justify-center w-full text-base font-semibold text-blue-100 transition-all duration-300 bg-white border border-blue-100 rounded h-11"
        :class="
          type == 'white'
            ? 'hover:bg-blue-100 hover:text-white'
            : 'hover:opacity-90'
        "
      >
        Купить сейчас
      </button>
    </div>
  </div>
</template>
