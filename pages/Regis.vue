<script setup lang="ts">
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const form = reactive<FormData>({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const rules: any = {
  name: [
    { required: true, message: "Введите имя", trigger: "blur" },
    {
      min: 3,
      message: "Имя должно содержать минимум 3 символа",
      trigger: "blur",
    },
  ],
  email: [
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
  confirmPassword: [
    { required: true, message: "Повторите пароль", trigger: "blur" },
    {
      validator: (_: any, value: string) => {
        if (value !== form.password && !!value) {
          return Promise.reject("Пароли не совпадают");
        }
        return Promise.resolve();
      },
      trigger: "blur",
    },
  ],
};

const onSubmit = () => {
  console.log("Form Data:", form);
};

definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div class="py-10 overflow-x-hidden min-h-max max-sm:py-7">
    <h2 class="text-5xl font-medium text-center text-dark-200 mb-15 max-sm:text-3xl max-sm:mb-7">
      Регистрация
    </h2>

    <a-form
      layout="vertical"
      :model="form"
      :rules="rules"
      @submit.prevent="onSubmit"
      class="max-w-md mt-4"
    >
      <a-form-item label="Имя" name="name">
        <a-input v-model:value="form.name" placeholder="Введите имя" />
      </a-form-item>

      <a-form-item label="Электронная почта" name="email">
        <a-input v-model:value="form.email" placeholder="Введите почту" />
      </a-form-item>

      <a-form-item label="Пароль" name="password">
        <a-input-password
          v-model:value="form.password"
          placeholder="Введите пароль"
        />
      </a-form-item>

      <a-form-item label="Подтверждение пароля" name="confirmPassword">
        <a-input-password
          v-model:value="form.confirmPassword"
          placeholder="Повторите пароль"
        />
      </a-form-item>
      <div class="flex flex-col gap-5 max-sm:gap-3">
        <a-button type="primary" html-type="submit" class="w-full"
          >Регистратсия</a-button
        >
        <nuxt-link
          to="/login"
          class="flex justify-center text-base font-semibold max-sm:text-sm !text-blue-300 !underline opacity-80 hover:opacity-100 transition duration-300"
        >
          Войти в аккаунт</nuxt-link
        >
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
