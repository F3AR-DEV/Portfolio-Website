<template>
  <div class="flex flex-col min-h-screen transition-colors duration-300"
    style="background-color: var(--color-bg-primary); color: var(--color-text-primary);">
    <AppHeader />
    <main class="grow pt-16">
      <NuxtPage />
    </main>
    <AppFooter />
    <NuxtRouteAnnouncer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/shared/widgets/AppHeader.vue';
import AppFooter from '~/shared/widgets/AppFooter.vue';
</script>