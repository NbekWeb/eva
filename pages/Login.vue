<script setup>
import useAuth from "~/stores/auth.pinia";
import { useRouter } from "vue-router";

const authPinia = useAuth();
const router = useRouter();

const form = reactive({
  identifier: "",
  password: "",
});
const formRef = ref(null);
const link =
  "https://id.vk.com/auth?return_auth_hash=1a73003da5b3dd6b6b&redirect_uri=https%3A%2F%2Feva-three-mu.vercel.app%2Fauth%2Fvk%2Flogin%2Fcallback%2F&redirect_uri_hash=b10f8d7f4b51cbb284&force_hash=&app_id=52982778&response_type=code&code_challenge=&code_challenge_method=&scope=4194304&state=";

const rules = {
  identifier: [{ required: true, message: "Введите логин", trigger: "blur" }],
  password: [
    { required: true, message: "Введите пароль", trigger: "blur" },
    // {
    //   min: 6,
    //   message: "Пароль должен содержать минимум 6 символов",
    //   trigger: "blur",
    // },
  ],
};

const onSubmit = async () => {
  try {
    await formRef.value.validate();
    authPinia.postLogin({ ...form }, () => {
      form.identifier = "";
      form.password = "";
      router.push("/");
    });
  } catch {
    message.error("Пожалуйста, заполните форму корректно!");
  }
};

const redirectToVK = () => {
  window.location.href =
    "https://id.vk.com/auth?return_auth_hash=1a73003da5b3dd6b6b&redirect_uri=https%3A%2F%2Feva-three-mu.vercel.app%2Fauth%2Fvk%2Flogin%2Fcallback%2F&redirect_uri_hash=b10f8d7f4b51cbb284&force_hash=&app_id=52982778&response_type=code&code_challenge=&code_challenge_method=&scope=4194304&state=";
};

definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div class="py-10 min-h-max max-sm:py-7">
    <h2
      class="text-5xl font-medium text-center max-sm:text-3xl max-sm:mb-7 text-dark-200 mb-15"
    >
      Вход
    </h2>

    <a-form
      layout="vertical"
      ref="formRef"
      :model="form"
      :rules="rules"
      @finish="onSubmit"
      class="max-w-md mt-4"
    >
      <a-form-item label="Имя пользователя" name="identifier">
        <a-input
          v-model:value="form.identifier"
          placeholder="Введите имя пользователя"
        />
      </a-form-item>

      <a-form-item label="Пароль" name="password">
        <a-input-password
          v-model:value="form.password"
          placeholder="Введите пароль"
        />
      </a-form-item>

      <div class="flex flex-col gap-5 max-sm:gap-3">
        <a-button type="primary" html-type="submit" class="w-full"
          >Вход</a-button
        >
        <nuxt-link
          to="/regis"
          class="flex justify-center text-base font-semibold !text-blue-300 !underline opacity-80 hover:opacity-100 transition duration-300"
        >
          Создать новый аккаунт
        </nuxt-link>
        <div
          class="text-base font-bold text-blue-300 flex gap-3.5 items-center"
        >
          <span class="flex-grow flex h-[1px] bg-blue-300 opacity-20"></span
          ><span>или</span
          ><span class="flex-grow flex h-[1px] bg-blue-300 opacity-20"></span>
        </div>
        <a-button class="flex items-center justify-center w-full gap-3">
          <img src="@/assets/img/google.svg" class="" />
          <span class="flex w-20 text-start"> Google </span>
        </a-button>
        <a-button
        @click="redirectToVK"
          type="primary"
          class="flex items-center justify-center w-full gap-3"
        >
          <img src="@/assets/img/vk.svg" class="" />
          <span class="flex w-20 text-start"> VK </span>
        </a-button>
      </div>
    </a-form>
  </div>
</template>
