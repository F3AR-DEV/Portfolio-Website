<template>
    <div class="pt-12 mt-12">
        <p class="text-sm mb-6" style="color: var(--color-text-tertiary);">{{ $t('contact.findMe') }}</p>
        <div class="flex justify-center gap-6">
            <NuxtLink href="https://github.com/F3AR-DEV" target="_blank" class="social-link" title="GitHub">
                <Icon name="bi:github" class="text-4xl" />
            </NuxtLink>
            <NuxtLink href="https://www.linkedin.com/in/freddavilez/" target="_blank" class="social-link"
                title="LinkedIn">
                <Icon name="bi:linkedin" class="text-4xl" />
            </NuxtLink>
            <NuxtLink href="mailto:freddenderson@outlook.com" class="social-link" title="Email">
                <Icon name="bi:envelope" class="text-4xl" />
            </NuxtLink>
        </div>
    </div>
</template>
