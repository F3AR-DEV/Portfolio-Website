<script setup lang="ts">
import AppButton from '~/shared/widgets/AppButton.vue';
</script>

<template>
    <div class="w-full lg:w-1/2 lg:pr-12 lg:border-r border-slate-800 in-[.light]:border-slate-200">
        <h2 class="section-title">Perfil Profesional</h2>
        <p class="section-text mb-6">
            Soy Ingeniero de Sistemas con experiencia en el desarrollo de aplicaciones web, móviles y de escritorio. Me
            enfoco en construir soluciones funcionales, claras y bien estructuradas.
        </p>
        <p class="section-text mb-8">
            Trabajo de manera organizada, con atención al detalle y compromiso con la calidad. Prioritizo la
            mantenibilidad, el rendimiento y la correcta implementación de cada sistema.
        </p>
        <p class="section-text mb-8">
            Me adapto a diferentes entornos y tecnologías según las necesidades del proyecto, manteniendo una actitud de
            aprendizaje constante y mejora continua.
        </p>
        <AppButton href="/assets/pdf/CV_FreddAvilez.pdf" download>Descargar CV</AppButton>
    </div>
</template>
