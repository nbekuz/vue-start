<template>
  <div class="bg-white rounded-lg shadow-md p-8">
    <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t('app.welcome') }}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 class="text-lg font-semibold text-blue-900 mb-2">Vue 3</h3>
        <p class="text-blue-700">Modern framework for building user interfaces</p>
      </div>
      
      <div class="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 class="text-lg font-semibold text-green-900 mb-2">Tailwind CSS</h3>
        <p class="text-green-700">Utility-first CSS framework</p>
      </div>
      
      <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <h3 class="text-lg font-semibold text-purple-900 mb-2">i18n</h3>
        <p class="text-purple-700">Internationalization support</p>
      </div>
    </div>

    <a-button type="primary" size="large" class="mt-8">
      {{ $t('nav.home') }}
    </a-button>
  </div>
</template>

<script setup>
</script>
