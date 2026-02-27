<script setup lang="ts">
import { ref } from 'vue';

const copiedType = ref<string | null>(null);

const copyToClipboard = async (text: string, type: string) => {
    try {
        await navigator.clipboard.writeText(text);
        copiedType.value = type;
        setTimeout(() => {
            copiedType.value = null;
        }, 2000);
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
};
</script>

<template>
    <div class="space-y-6 mb-12">
        <div class="flex flex-wrap items-center justify-center gap-2">
            <Icon name="bi:envelope" class="text-3xl mr-2" style="color: var(--color-accent-primary);" />
            <span class="contact-info">freddenderson@outlook.com</span>
            <button @click="copyToClipboard('freddenderson@outlook.com', 'email')" class="contact-copy-button"
                title="Copiar email">
                <Icon class="text-xl" :name="copiedType === 'email' ? 'bi:check2' : 'bi:copy'"
                    :style="copiedType === 'email' ? 'color: var(--color-accent-primary)' : ''" />
            </button>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-2">
            <Icon name="bi:telephone" class="text-3xl mr-2" style="color: var(--color-accent-primary);" />
            <span class="contact-info">+505 77723523</span>
            <button @click="copyToClipboard('+505 77723523', 'phone')" class="contact-copy-button"
                title="Copiar teléfono">
                <Icon class="text-xl" :name="copiedType === 'phone' ? 'bi:check2' : 'bi:copy'"
                    :style="copiedType === 'phone' ? 'color: var(--color-accent-primary)' : ''" />
            </button>
        </div>
    </div>
</template>
