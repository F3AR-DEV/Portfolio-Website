<template>
    <div :class="[
        'app-card',
        rounded,
        padding,
        { 'hover:-translate-y-1 hover:shadow-md': hoverable }
    ]">
        <slot />
    </div>
</template>

<script setup lang="ts">
interface Props {
    padding?: string;
    rounded?: string;
    hoverable?: boolean;
}

withDefaults(defineProps<Props>(), {
    padding: 'p-6 md:p-8',
    rounded: 'app-radius',
    hoverable: false
});
</script>
