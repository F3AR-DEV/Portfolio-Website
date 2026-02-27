<script setup lang="ts">
import AppButton from '~/shared/widgets/AppButton.vue';
</script>

<template>
    <div class="w-full lg:w-7/12 order-2 lg:order-1 text-center lg:text-left">
        <h1 class="hero-title">
            Hola, soy <span style="color: var(--color-accent-primary);">Fredd</span> <span
                class="inline-block animate-waveorigin-70 animate-wave">👋</span>
        </h1>
        <h2 class="text-xl lg:text-2xl font-bold mb-4">
            <span
                class="bg-clip-text text-transparent bg-linear-to-r from-(--color-accent-primary) to-(--color-accent-secondary)">Ingeniero
                de Sistemas</span>
            <span class="text-white mx-2">|</span>
            <span
                class="bg-clip-text text-transparent bg-linear-to-r from-(--color-accent-primary) to-(--color-accent-secondary)">Desarrollador
                Full Stack</span>
        </h2>
        <p class="hero-text max-w-2xl mx-auto lg:mx-0">
            Con 3 años de experiencia en desarrollo de software.
            Diseño y desarrollo soluciones tecnológicas escalables, fundamentadas en una arquitectura sólida,
            rendimiento óptimo y altos estándares de calidad.
        </p>

        <div class="flex flex-col gap-2 mb-8" style="color: var(--color-text-secondary);">
            <div class="flex items-center justify-center lg:justify-start gap-3">
                <Icon name="bi:geo-alt" class="text-xl" />
                <span>Managua, Managua, Nicaragua</span>
            </div>
            <div class="flex items-center justify-center lg:justify-start gap-3">
                <Icon name="bi:envelope" class="text-xl" />
                <span>freddenderson@outlook.com</span>
            </div>
            <div class="flex items-center justify-center lg:justify-start gap-3">
                <Icon name="bi:telephone" class="text-xl" />
                <span>+505 77723523</span>
            </div>
            <div class="flex items-center justify-center lg:justify-start gap-3">
                <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                        style="background-color: var(--color-accent-secondary);">
                    </span>
                    <span class="relative inline-flex rounded-full h-3 w-3"
                        style="background-color: var(--color-accent-primary);">
                    </span>
                </span>
                <span>Disponible para nuevos proyectos</span>
            </div>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center lg:justify-start gap-4 mb-10">
            <AppButton href="https://github.com/F3AR-DEV" target="_blank" variant="outline" class="social-link"
                title="GitHub">
                <Icon name="bi:github" class="text-3xl" />
            </AppButton>
            <AppButton href="https://www.linkedin.com/in/freddavilez/" target="_blank" variant="outline"
                class="social-link" title="LinkedIn">
                <Icon name="bi:linkedin" class="text-3xl" />
            </AppButton>
            <AppButton href="mailto:freddenderson@outlook.com" target="_blank" variant="outline" class="social-link"
                title="Email">
                <Icon name="bi:envelope" class="text-3xl" />
            </AppButton>
        </div>
    </div>
</template>

<style scoped>
@keyframes wave {
    0% {
        transform: rotate(0.0deg)
    }

    10% {
        transform: rotate(14.0deg)
    }

    20% {
        transform: rotate(-8.0deg)
    }

    30% {
        transform: rotate(14.0deg)
    }

    40% {
        transform: rotate(-4.0deg)
    }

    50% {
        transform: rotate(10.0deg)
    }

    60% {
        transform: rotate(0.0deg)
    }

    100% {
        transform: rotate(0.0deg)
    }
}

.animate-wave {
    animation: wave 2.5s infinite;
    transform-origin: 70% 70%;
}
</style>
