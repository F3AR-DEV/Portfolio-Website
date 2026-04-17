<script setup lang="ts">
import AppButton from '~/shared/widgets/AppButton.vue';
</script>

<template>
    <div class="w-full lg:w-1/2 lg:pr-12 lg:border-r" style="border-color: var(--color-border-primary);">
        <h2 class="section-title">{{ $t('profile.title') }}</h2>
        <p class="section-text mb-6">
            {{ $t('profile.p1') }}
        </p>
        <p class="section-text mb-8">
            {{ $t('profile.p2') }}
        </p>
        <p class="section-text mb-8">
            {{ $t('profile.p3') }}
        </p>
        <AppButton href="/assets/pdf/CV_FreddAvilez.pdf" download>{{ $t('nav.download_cv') }}</AppButton>
    </div>
</template>
