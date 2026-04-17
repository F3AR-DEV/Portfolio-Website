<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';

import authApiImg from '~/shared/assets/img/AuthApi_.Net.jpg';
import proyPortafolioImg from '~/shared/assets/img/proy_portafolios.png'


import { computed } from 'vue';

const staticProjectData = [
    {
        image: authApiImg,
        tags: ['.NET 10', 'C#', 'SQLite', 'Entity Framework', 'JWT', "Swagger"],
        githubUrl: 'https://github.com/F3AR-DEV/.Net_AuthApi',
        reversed: false,
    },
    {
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
        tags: ['.NET 4.7.2', 'WPF', 'C#', 'SQLite', 'Material Design', 'OxyPlot'],
        githubUrl: 'https://github.com/F3AR-DEV/SDG_de_Produccion_e_Inventarios-Proy_Prod_III',
        reversed: true,
    },
    {
        image: proyPortafolioImg,
        tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
        reversed: false,
        githubUrl: 'https://github.com/F3AR-DEV/Portfolio-Website',
    }
];

const { tm, rt } = useI18n();

const projects = computed(() => {
    const list = tm('projects.list') as any[];
    return list.map((proj, idx) => {
        const staticData = staticProjectData[idx];
        return {
            title: rt(proj.title),
            description: rt(proj.description),
            image: staticData?.image || '',
            tags: staticData?.tags || [],
            githubUrl: staticData?.githubUrl,
            reversed: staticData?.reversed || false
        };
    });
});
</script>

<template>
    <div class="grid grid-cols-1 gap-12 lg:gap-16">
        <ProjectCard v-for="(project, index) in projects" :key="index" v-bind="project" />
    </div>
</template>
