<script setup lang="ts">
import AppButton from '~/shared/widgets/AppButton.vue';
import ProjectsIntro from './widgets/ProjectsIntro.vue';
import ProjectsGrid from './widgets/ProjectsGrid.vue';
</script>

<template>
    <section id="projects" class="py-20">
        <div class="app-container">
            <ProjectsIntro />
            <ProjectsGrid />

            <div class="text-center mt-16">
                <AppButton href="https://github.com/F3AR-DEV" target="_blank" variant="primary"
                    class="text-lg px-8 py-3">
                    Explorar Más en GitHub
                    <Icon name="bi:arrow-right" class="ml-2" />
                </AppButton>
            </div>
        </div>
    </section>
</template>
