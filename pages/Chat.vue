<script setup lang="ts"></script>
<template>
    <div class="flex w-full h-screen bg-white">
        <Sidebar/>
        <div class="side-bar"></div>
    </div>
</template>
<style scoped>
.side-bar{
    height: 300px;
    width: 100%;
    filter: blur(200px);
    background: #3F50E7;
}
</style>