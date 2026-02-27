<script setup lang="ts">
import ContactIntro from './widgets/ContactIntro.vue';
import ContactMethods from './widgets/ContactMethods.vue';
import ContactSocials from './widgets/ContactSocials.vue';
</script>

<template>
    <section id="contact" class="py-20">
        <div class="app-container text-center">
            <ContactIntro />
            <ContactMethods />
            <ContactSocials />
        </div>
    </section>
</template>
