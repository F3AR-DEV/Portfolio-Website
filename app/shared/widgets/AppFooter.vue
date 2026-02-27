<template>
    <footer class="mt-auto pt-12 pb-52 border-t transition-colors duration-300"
        style="background-color: var(--color-bg-secondary); border-color: var(--color-border-secondary);">
        <div class="app-container">
            <div class="flex flex-col items-center gap-6 text-center">
                <!-- Brand -->
                <div>
                    <NuxtLink to="/" class="text-xl font-bold tracking-tight group"
                        style="color: var(--color-text-primary);">
                        Portafolio
                    </NuxtLink>
                </div>

                <!-- Social Links -->
                <div class="flex items-center gap-4">
                    <a v-for="social in socialLinks" :key="social.name" :href="social.href" :title="social.name"
                        class="social-link">
                        <Icon :name="social.icon" class="text-2xl" />
                    </a>
                </div>

                <!-- Copyright -->
                <div>
                    <p class="text-sm" style="color: var(--color-text-tertiary);">
                        &copy; 2022 - {{ new Date().getFullYear() }} | Diseñado y programado con
                        <Icon name="bi:heart-fill" class="text-red-500 mx-1 animate-pulse" />
                        por mí
                    </p>
                    <p class="text-xs mt-2" style="color: var(--color-text-tertiary); opacity: 0.8;">
                        Inspirado en el trabajo de
                        <a href="https://www.figma.com/community/file/1262992249991763120" target="_blank"
                            rel="noopener noreferrer"
                            class="hover:text-(--color-accent-primary) underline underline-offset-4 transition-colors">
                            Sagar Shah
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const socialLinks = [
    { name: "GitHub", href: "https://github.com/F3AR-DEV", icon: "bi:github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/freddavilez/", icon: "bi:linkedin" },
    { name: "Email", href: "mailto:freddenderson@outlook.com", icon: "bi:envelope" },
];
</script>
