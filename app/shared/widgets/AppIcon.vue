<template>
    <img :src="isLocalIcon ? icon : `https://skillicons.dev/icons?i=${icon}`" :alt="name" class="skill-icon">
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    name: string;
    icon: string;
}>();

const isLocalIcon = computed(() => props.icon.includes('/') || props.icon.includes('.'));
</script>
