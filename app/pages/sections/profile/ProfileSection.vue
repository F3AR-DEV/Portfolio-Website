<script setup lang="ts">
import ProfileBio from './widgets/ProfileBio.vue';
import ProfileSkills from './widgets/ProfileSkills.vue';
</script>

<template>
    <section id="profile" class="py-20">
        <div class="app-container">
            <div class="flex flex-col lg:flex-row gap-12">
                <ProfileBio />
                <ProfileSkills />
            </div>
        </div>
    </section>
</template>
