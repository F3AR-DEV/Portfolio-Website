<script setup lang="ts">
import AppButton from '~/shared/widgets/AppButton.vue';
import AppCard from '~/shared/widgets/AppCard.vue';

interface Props {
    title: string;
    description: string;
    image: string;
    tags: string[];
    reversed?: boolean;
    githubUrl?: string;
    projectUrl?: string;
}

withDefaults(defineProps<Props>(), {
    reversed: false,
    githubUrl: '#',
});
</script>

<template>
    <AppCard padding="p-0" class="overflow-hidden hover:-translate-y-1">
        <div class="flex flex-col h-full" :class="[reversed ? 'lg:flex-row-reverse' : 'lg:flex-row']">
            <div class="lg:w-7/12 p-8 flex items-center justify-center overflow-hidden group border-b lg:border-b-0"
                :class="[reversed ? 'lg:border-l' : 'lg:border-r']"
                style="background-color: var(--color-bg-secondary); border-color: var(--color-border-secondary);">
                <img :src="image" :alt="title"
                    class="rounded-lg shadow-md transform group-hover:scale-[1.02] transition-transform duration-500 w-full object-cover">
            </div>
            <div class="lg:w-5/12 p-8 lg:p-10 flex flex-col justify-center">
                <h3 class="project-title">{{ title }}</h3>
                <p class="body-text mb-6">
                    {{ description }}
                </p>
                <div class="flex flex-wrap gap-2 mb-8">
                    <span v-for="tech in tags" :key="tech" class="tech-tag">
                        {{ tech }}
                    </span>
                </div>
                <div class="flex gap-4">
                    <AppButton :href="githubUrl" variant="outline" class="text-2xl" title="GitHub">
                        <Icon name="bi:github" />
                    </AppButton>
                    <AppButton v-if="projectUrl" :href="projectUrl" variant="outline" class="text-2xl"
                        title="Ver Proyecto">
                        <Icon name="bi:box-arrow-up-right" />
                    </AppButton>
                </div>
            </div>
        </div>
    </AppCard>
</template>
