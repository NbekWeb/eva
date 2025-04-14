<script setup lang="ts"></script>
<template>
    <div class="flex w-full h-screen bg-white">
        <Sidebar/>
        <div class="fixed bottom-0 left-0 w-full side-bar"></div>
    </div>
</template>
<style scoped>
.side-bar{
    height: 33vh;
    filter: blur(200px);
    background: #3F50E7;
}
</style>