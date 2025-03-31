<script setup lang="ts">
const config = useRuntimeConfig();

// console.log(config.public.apiUrl); 
</script>

<template>
  <div class="px-10">
    <a-button type="primary">Click Me</a-button>
    <a-button type="primary">Click Me</a-button>
    <a-button type="link">Click Me</a-button>
    <a-button type="primary">Click Me</a-button>
    <span class="bg-red-500">sa</span>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
