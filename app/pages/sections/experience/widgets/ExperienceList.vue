<script setup lang="ts">
import ExperienceItem from './ExperienceItem.vue';
import strapi from '@/shared/assets/icons/strapi.png';


const experiences = [
    {
        company: 'Freelance',
        role: 'Desarrollador Full Stack – Freelance',
        date: 'Ago 2025 – Actualidad',

        items: [
            'Desarrollo de páginas web y sitios corporativos adaptados a las necesidades del cliente.',
            'Creación de aplicaciones móviles y de escritorio orientadas a soluciones prácticas y funcionales.',
            'Diseño e implementación de soluciones digitales'
        ],
        techStack: [
            { name: 'Vue', icon: 'vue' },
            { name: 'Nuxt', icon: 'nuxt' },
            { name: 'strapi', icon: strapi },
            { name: 'Flutter', icon: 'flutter' },
            { name: 'Dart', icon: 'dart' },
            { name: 'Postman', icon: 'postman' }
        ]
    },
    {
        company: 'Banco de Fomento a la Producción (BFP)',
        role: 'Oficial de Calidad – Servicio Profesional',
        date: 'Jun 2024 – Ago 2025',

        items: [
            'Resolución de incidencias técnicas relacionadas con cuentas, préstamos y servicios API.',
            'Ejecución de pruebas funcionales y pruebas UAT del core bancario (e-IBS Datapro).',
            'Participación en despliegues a producción y validaciones posteriores al lanzamiento.',
            'Supervisión y validación de flujos BPM y procesos de banca en línea.',
            'Análisis de requerimientos funcionales y coordinación con equipos técnicos.',
            'Optimización de procesos operativos mediante seguimiento y validación continua.'
        ],
        techStack: [
            { name: 'Java', icon: 'java' },
            { name: 'Spring', icon: 'spring' },
            { name: 'Tomcat', icon: 'java' },
            { name: 'SQL', icon: 'mysql' },
            { name: 'Postman', icon: 'postman' }
        ]
    },
    {
        company: 'Corte Suprema de Justicia (CSJ)',
        role: 'Analista Programador – Servicio Profesional',
        date: 'Jun 2023 – Ene 2024',

        items: [
            'Desarrollo y mantenimiento de aplicaciones internas utilizando C# y .NET.',
            'Construcción de interfaces web con Vue.js.',
            'Gestión y consultas en bases de datos SQL Server.',
            'Integración y consumo de APIs de Google.',
            'Soporte técnico y mejora continua de sistemas institucionales.'
        ],
        techStack: [
            { name: 'C#', icon: 'cs' },
            { name: '.NET', icon: 'dotnet' },
            { name: 'Vue.js', icon: 'vue' },
            { name: 'SQL Server', icon: 'azure' },
            { name: 'Postman', icon: 'postman' }
        ]
    }
];
</script>

<template>
    <div class="max-w-4xl mx-auto space-y-8">
        <ExperienceItem v-for="(exp, index) in experiences" :key="index" v-bind="exp" />
    </div>
</template>
