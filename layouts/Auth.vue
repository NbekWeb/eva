<script setup lang="ts"></script>
<template>
  <div class="grid min-h-screen grid-cols-2 auth max-lg:grid-cols-1">
    <div class="flex flex-col items-center justify-center max-h-full">
      <nuxt-page />
    </div>
    <div class="relative w-full max-lg:hidden">
      <img
        src="~/assets/img/auth.png"
        class="fixed top-0 right-0 object-cover w-1/2 h-screen rounded-l-3xl"
      />
    </div>
  </div>
</template>
