<script setup lang="ts">
import heroImage from '~/shared/assets/img/Foto_Fear.jpg';
</script>

<template>
    <div class="w-full lg:w-5/12 order-1 lg:order-2 flex justify-center lg:justify-end">
        <div class="relative group">
            <img :src="heroImage" alt="Fredd Avilez"
                class="app-radius w-64 h-64 sm:w-80 sm:h-80 object-cover transform transition-all duration-700 hover:scale-[1.02] hero-glow">
        </div>
    </div>
</template>
