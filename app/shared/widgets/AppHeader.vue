<template>
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="[
        isScrolled
            ? 'header-bg-scrolled backdrop-blur-md border-b solid-shadow'
            : 'bg-transparent border-b border-transparent',
    ]">
        <div class="app-container">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <a href="#hero"
                    class="text-xl font-bold tracking-tight header-logo hover:scale-105 transition-transform duration-200">
                    {{ $t('nav.logo') }}
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-6 ml-auto">
                    <a v-for="item in navItems" :key="item.href" :href="item.href" class="header-nav-link group">
                        {{ $t(item.labelKey) }}
                        <span class="header-nav-link-underline"></span>
                    </a>
                </div>

                <!-- Right Side Utils -->
                <div class="hidden md:flex items-center space-x-1 ml-4">
                    <button @click="toggleLanguage" class="header-button" :title="$t('nav.change_language')">
                        <span class="text-xs font-bold">{{ locale.toUpperCase() }}</span>
                    </button>

                    <div class="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>
                    <AppButton :href="`/assets/pdf/CV_FreddAvilez_${locale}.pdf`" download class="ml-2">{{
                        $t('nav.download_cv') }}
                    </AppButton>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden flex items-center">
                    <button @click="isMenuOpen = !isMenuOpen" class="header-button focus:outline-none">
                        <Icon class="text-2xl" :name="isMenuOpen ? 'bi:x' : 'bi:list'" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <Transition name="slide-fade">
            <div v-show="isMenuOpen" class="md:hidden header-mobile-menu backdrop-blur-xl border-b">
                <div class="px-4 pt-2 pb-6 space-y-2">
                    <a v-for="item in navItems" :key="item.href" :href="item.href" @click="isMenuOpen = false"
                        class="header-mobile-link">
                        {{ $t(item.labelKey) }}
                    </a>
                    <div class="pt-4 flex items-center justify-between border-t header-mobile-divider mt-4">
                        <div class="flex items-center space-x-2">
                            <button @click="toggleLanguage" class="header-button">
                                {{ locale.toUpperCase() }}
                            </button>
                        </div>
                        <AppButton :href="`/assets/pdf/CV_FreddAvilez_${locale}.pdf`" download size="sm">{{
                            $t('nav.download_cv') }}
                        </AppButton>
                    </div>
                </div>
            </div>
        </Transition>
    </nav>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import AppButton from '~/shared/widgets/AppButton.vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const { locale, setLocale } = useI18n();

const navItems = [
    { labelKey: "nav.home", href: "#hero" },
    { labelKey: "nav.profile", href: "#profile" },
    { labelKey: "nav.experience", href: "#experience" },
    { labelKey: "nav.projects", href: "#projects" },
    { labelKey: "nav.contact", href: "#contact" },
];

const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

const toggleLanguage = () => {
    setLocale(locale.value === "en" ? "es" : "en");
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);

    // Apply dark theme globally
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>
