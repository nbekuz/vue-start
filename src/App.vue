<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold text-gray-900">{{ $t('app.title') }}</h1>
          </div>
          <div class="flex items-center gap-4">
            <a-select 
              v-model:value="currentLocale" 
              style="width: 120px"
              @change="changeLocale"
            >
              <a-select-option value="uz">Uzbek</a-select-option>
              <a-select-option value="ru">Russian</a-select-option>
            </a-select>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

const changeLocale = (lang) => {
  locale.value = lang
  currentLocale.value = lang
}
</script>
