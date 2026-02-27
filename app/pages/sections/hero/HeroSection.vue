<script setup lang="ts">
import HeroBackground from './widgets/HeroBackground.vue';
import HeroContent from './widgets/HeroContent.vue';
import HeroImage from './widgets/HeroImage.vue';
</script>

<template>
    <section id="hero" class="flex items-center min-h-[90vh] py-12 relative overflow-hidden">
        <HeroBackground />

        <div class="app-container">
            <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                <HeroContent />
                <HeroImage />
            </div>
        </div>
    </section>
</template>
