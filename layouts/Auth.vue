<script setup lang="ts"></script>
<template>
  <div class="grid min-h-screen grid-cols-2 auth max-lg:grid-cols-1">
    <div class="flex flex-col items-center justify-center max-h-full">
      <nuxt-page />
    </div>
    <div
      class="relative w-full max-lg:hidden bg-white flex items-center justify-center"
    >
      <img
        src="~/assets/img/auth.jpg"
        class="object-contain w-auto h-1/2"
        loading="lazy"
      />
    </div>
  </div>
</template>
