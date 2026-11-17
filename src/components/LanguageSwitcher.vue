<template>
  <div ref="root" class="language_switcher">
    <button
      type="button"
      class="language_button"
      :aria-label="t('language.switch')"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click="toggleMenu"
    >
      <i class="fa-solid fa-globe"></i>
      <span class="current">{{ currentLabel }}</span>
      <i class="fa-solid fa-chevron-down caret" :class="{ open: isOpen }"></i>
    </button>
    <Transition name="menu">
      <ul v-if="isOpen" class="language_menu" role="listbox">
        <li
          v-for="option in options"
          :key="option.value"
          role="option"
          :aria-selected="option.value === localePreference"
          class="language_option"
          :class="{ selected: option.value === localePreference }"
          @click="select(option.value)"
        >
          <span>{{ option.label }}</span>
          <i v-if="option.value === localePreference" class="fa-solid fa-check"></i>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { localePreference, setLocalePreference, type LocalePreference } from '../i18n';

const { t } = useI18n();

const isOpen = ref(false);
const root = ref<HTMLElement | null>(null);

const options = computed(() => [
  { value: 'auto' as LocalePreference, label: t('language.auto') },
  { value: 'en' as LocalePreference, label: t('language.en') },
  { value: 'zh-CN' as LocalePreference, label: t('language.zhCN') }
]);

const currentLabel = computed(
  () => options.value.find((option) => option.value === localePreference.value)?.label ?? ''
);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function select(value: LocalePreference) {
  setLocalePreference(value);
  isOpen.value = false;
}

function handleOutsideClick(event: MouseEvent) {
  if (root.value && !root.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
  document.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.language_switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
  font-size: 14px;
  opacity: 0;
  animation: fadeIn .3s forwards ease-in-out;
  animation-delay: 1.5s;
}

.language_button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font: inherit;
  color: var(--switcher-text);
  background-color: var(--switcher-button-bg);
  border: 1px solid var(--switcher-border);
  border-radius: 20px;
  cursor: pointer;
  transition: background-color ease-in-out .2s, border-color 0.3s ease-in-out;
}

.language_button:hover {
  background-color: var(--switcher-button-hover-bg);
}

.caret {
  transition: transform 0.2s ease-in-out;
}

.caret.open {
  transform: rotate(180deg);
}

.language_menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 140px;
  margin: 0;
  padding: 6px 0;
  list-style: none;
  background-color: var(--switcher-menu-bg);
  backdrop-filter: blur(15px);
  border: 1px solid var(--switcher-menu-border);
  border-radius: 10px;
  box-shadow: var(--switcher-menu-shadow);
}

.language_option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 14px;
  color: var(--switcher-text);
  white-space: nowrap;
  cursor: pointer;
  transition: background-color .2s ease-in-out;
}

.language_option:hover {
  background-color: var(--switcher-option-hover-bg);
}

.language_option.selected {
  color: var(--accent-color);
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
