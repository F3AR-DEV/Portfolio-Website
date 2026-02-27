<template>
    <component :is="componentType" v-bind="bindings"
        class="inline-flex items-center justify-center px-4 py-2 app-radius font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 in-[.light]:focus:ring-offset-white"
        :class="variantClasses">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    variant?: "primary" | "outline" | "ghost";
    to?: string;
    href?: string;
    download?: boolean;
}>();

const componentType = computed(() => {
    if (props.to) return "NuxtLink";
    if (props.href) return "a";
    return "button";
});

const bindings = computed(() => {
    const b: any = {};
    if (props.to) b.to = props.to;
    if (props.href) b.href = props.href;
    if (props.download) b.download = "";
    return b;
});

const variantClasses = computed(() => {
    switch (props.variant) {
        case "outline":
            return "app-button-outline";
        case "ghost":
            return "app-button-ghost";
        default: // primary
            return "app-button-primary";
    }
});
</script>
