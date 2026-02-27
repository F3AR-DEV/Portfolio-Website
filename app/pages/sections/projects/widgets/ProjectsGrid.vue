<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';

import authApiImg from '~/shared/assets/img/AuthApi_.Net.jpg';
import proyPortafolioImg from '~/shared/assets/img/proy_portafolios.png'


const projects = [
    {
        title: 'AuthApi .NET',
        description: 'Sistema de Autenticación y Gestión de Usuarios que implementa patrones seguros con JWT, Refresh Tokens y control de acceso basado en roles (RBAC).',
        image: authApiImg,
        tags: ['.NET 10', 'C#', 'SQLite', 'Entity Framework', 'JWT', "Swagger"],
        githubUrl: 'https://github.com/F3AR-DEV/.Net_AuthApi',
        // projectUrl: 'https://github.com/F3AR-DEV/.Net_AuthApi',
        reversed: false,
    },
    {
        title: 'Sistema de Gestión de Producción e Inventarios',
        description: 'Stock MGM es un sistema integral para planificar y controlar procesos productivos. Incluye módulos de Gestión de Inventarios (EOQ), Planeación de Requerimientos de Materiales (MRP) y Planeación Agregada.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
        tags: ['.NET 4.7.2', 'WPF', 'C#', 'SQLite', 'Material Design', 'OxyPlot'],
        githubUrl: 'https://github.com/F3AR-DEV/SDG_de_Produccion_e_Inventarios-Proy_Prod_III',
        reversed: true, // Alternating from previous
    },
    {
        title: 'Mi Portafolio Profesional',
        description: 'Plataforma web personal construida con tecnologías modernas para exhibir trayectoria y proyectos. Enfocada en rendimiento, accesibilidad y diseño responsivo.',
        image: proyPortafolioImg,
        tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
        reversed: false, // Alternating from previous
        githubUrl: 'https://github.com/F3AR-DEV/Portfolio-Website',
    }
];
</script>

<template>
    <div class="grid grid-cols-1 gap-12 lg:gap-16">
        <ProjectCard v-for="(project, index) in projects" :key="index" v-bind="project" />
    </div>
</template>
