<script setup lang="ts">
import AppCard from '~/shared/widgets/AppCard.vue';
import AppIcon from '~/shared/widgets/AppIcon.vue';

interface TechItem {
    name: string;
    icon: string;
}

interface Props {
    company: string;
    role: string;
    date: string;
    location?: string;
    items: string[];
    techStack?: TechItem[];
}

const props = defineProps<Props>();
</script>

<template>
    <AppCard :hoverable="true">
        <div class="flex flex-col md:flex-row justify-between gap-6 mb-6">
            <!-- Left Column: Content -->
            <div class="flex-1">
                <div class="mb-4">
                    <h4 class="card-title mb-2" style="color: var(--color-accent-primary);">{{ role }}</h4>
                    <h5 class="subsection-title font-bold text-white">{{ company }}</h5>
                </div>

                <!-- Mobile Meta -->
                <div class="flex flex-col md:hidden mb-4">
                    <span class="meta-text">{{ date }}</span>
                    <span v-if="location" class="meta-text mt-1">{{ location }}</span>
                </div>

                <ul class="space-y-3">
                    <li v-for="(item, index) in items" :key="index" class="flex items-start">
                        <Icon name="bi:check2-circle" class="mt-1 mr-3 shrink-0"
                            style="color: var(--color-accent-primary);" />
                        <span class="body-text-sm">{{ item }}</span>
                    </li>
                </ul>
            </div>

            <!-- Right Column: Meta (Desktop) -->
            <div class="hidden md:flex flex-col items-end gap-1 shrink-0">
                <div class="inline-flex flex-col items-start px-5 py-3 rounded-xl border text-sm"
                    style="background-color: var(--color-bg-tertiary); border-color: var(--color-border-primary);">
                    <div class="flex items-center gap-2 font-medium" style="color: var(--color-text-secondary);">
                        <Icon name="bi:calendar3" />
                        <span>{{ date }}</span>
                    </div>
                    <div v-if="location" class="flex items-center gap-2 mt-2 font-medium"
                        style="color: var(--color-text-secondary);">
                        <Icon name="bi:geo-alt" />
                        <span>{{ location }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tech Stack Section -->
        <div v-if="techStack && techStack.length > 0" class="pt-4 border-t flex flex-wrap items-center gap-4"
            style="border-color: var(--color-border-secondary);">
            <span class="text-xs font-bold uppercase tracking-wider shrink-0"
                style="color: var(--color-text-tertiary);">Tecnologías</span>
            <div class="flex flex-wrap gap-2">
                <div v-for="tech in techStack" :key="tech.name"
                    class="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors hover:border-opacity-100"
                    style="background-color: var(--color-bg-tertiary); border-color: var(--color-border-primary); color: var(--color-text-secondary);">
                    <AppIcon :icon="tech.icon" :name="tech.name" class="w-4 h-4" />
                    <span>{{ tech.name }}</span>
                </div>
            </div>
        </div>
    </AppCard>
</template>
