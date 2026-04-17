<script setup lang="ts">
import ExperienceItem from './ExperienceItem.vue';


import { computed } from 'vue';

const techStacks = [
    [
        { name: 'C#', icon: 'cs' },
        { name: '.NET', icon: 'dotnet' },
        { name: 'Vue.js', icon: 'vue' },
        { name: 'SQL Server', icon: 'azure' },
        { name: 'Postman', icon: 'postman' }
    ]
];

const { tm, rt } = useI18n();

const experiences = computed(() => {
    const jobs = tm('experience.jobs') as any[];
    return jobs.map((job, idx) => ({
        company: rt(job.company),
        role: rt(job.role),
        date: rt(job.date),
        items: job.items ? job.items.map((item: any) => rt(item)) : [],
        techStack: techStacks[idx]
    }));
});
</script>

<template>
    <div class="max-w-4xl mx-auto space-y-8">
        <ExperienceItem v-for="(exp, index) in experiences" :key="index" v-bind="exp" />
    </div>
</template>
