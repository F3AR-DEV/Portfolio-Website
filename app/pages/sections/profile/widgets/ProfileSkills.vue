<template>
    <div class="w-full lg:w-1/2 lg:pl-5">
        <h2 class="section-title mb-8">{{ $t('profile.skills.title') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SkillGroup :title="$t('profile.skills.languages')" icon="bi:code-square" :skills="languages" />
            <SkillGroup :title="$t('profile.skills.frameworks')" icon="bi:layers" :skills="frameworks" />
            <SkillGroup :title="$t('profile.skills.databases')" icon="bi:database" :skills="databases" />
            <SkillGroup :title="$t('profile.skills.tools')" icon="bi:tools" :skills="tools" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SkillGroup from './SkillGroup.vue';
import vbIcon from '~/shared/assets/icons/vb.png';

const languages = [
    { name: 'JS', icon: 'js' },
    { name: 'TS', icon: 'ts' },
    { name: 'C#', icon: 'cs' },
    { name: 'Dart', icon: 'dart' },
    { name: 'Java', icon: 'java' },
    { name: 'Visual Basic', icon: vbIcon },
];

const frameworks = [
    { name: 'Flutter', icon: 'flutter' },
    { name: 'NestJS', icon: 'nestjs' },
    { name: '.NET', icon: 'dotnet' },
    { name: 'Vue', icon: 'vue' },
    { name: 'Nuxt', icon: 'nuxt' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
];

const databases = [
    { name: 'PostgreSQL', icon: 'postgres' },
    { name: 'SQL Server', icon: 'azure' },
    { name: 'SQLite', icon: 'sqlite' },
    { name: 'Prisma', icon: 'prisma' },
    { name: 'Entity Framework', icon: 'dotnet' },
];

const tools = [
    { name: 'Git', icon: 'git' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Strapi', icon: '/assets/icons/strapi.png' },
];
</script>
