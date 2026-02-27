<script setup lang="ts">
import AppIcon from '~/shared/widgets/AppIcon.vue';

interface Skill {
    name: string;
    icon: string;
}

interface Props {
    title: string;
    icon: string;
    skills: Skill[];
}

const props = defineProps<Props>();
</script>

<template>
    <div>
        <div class="flex items-center mb-4">
            <Icon :name="props.icon" class="section-icon" />
            <h3 class="subsection-title">
                {{ title }}
            </h3>
        </div>
        <div class="grid grid-cols-4 gap-3">
            <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center group">
                <div class="skill-card-badge">
                    <AppIcon :icon="skill.icon" :name="skill.name" />
                </div>
                <span class="skill-label">{{ skill.name }}</span>
            </div>
        </div>
    </div>
</template>
