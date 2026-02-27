<template>
    <div class="overflow-x-hidden section-zebra">
        <HeroSection />
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
    </div>

</template>

<script setup lang="ts">
import HeroSection from './sections/hero/HeroSection.vue';
import ProfileSection from './sections/profile/ProfileSection.vue';
import ExperienceSection from './sections/experience/ExperienceSection.vue';
import ProjectsSection from './sections/projects/ProjectsSection.vue';
import ContactSection from './sections/contact/ContactSection.vue';

// Metadatos SEO
useHead({
    title: 'Fredd Avilez | Full Stack Developer',
    meta: [
        { name: 'description', content: 'Portfolio de Freddy Avilez, desarrollador Full Stack especializado en React, Node.js y experiencias digitales modernas.' }
    ]
})
</script>
