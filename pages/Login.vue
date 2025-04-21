<script setup>
import useAuth from "~/stores/auth.pinia";

const authPinia = useAuth();

const form = reactive({
  identifier: "saas@gmail.com",
  password: "dsdsdsds",
});
const formRef = ref(null);

const rules = {
  identifier: [
    { required: true, message: "Введите почту", trigger: "blur" },
    { type: "email", message: "Некорректный формат почты", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Введите пароль", trigger: "blur" },
    {
      min: 6,
      message: "Пароль должен содержать минимум 6 символов",
      trigger: "blur",
    },
  ],
};

const onSubmit = async () => {
  try {
    await formRef.value.validate();
    authPinia.postLogin({ ...form }, () => {
      form.identifier = "";
      form.password = "";
    });
  } catch {
    message.error("Пожалуйста, заполните форму корректно!");
  }
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
        <div class="vk">
          <a-button
            type="primary"
            class="flex items-center justify-center w-full gap-3"
          >
            <img src="@/assets/img/vk.svg" class="" />
            <span class="flex w-20 text-start"> VK </span>
          </a-button>
        </div>
      </div>
    </a-form>
  </div>
</template>
