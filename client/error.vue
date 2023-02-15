<template>
  <div class="mt-5 max-w-sm mx-auto text-center card">
    <p class="mt-5 text-7xl font-bold">{{error.statusCode}}</p>
    <p class="mt-5">{{error.message}}</p>
    <button class="btn my-5" @click="handleError">Voltar para o início</button>
  </div>
</template>

<script setup>
  defineProps({
    error: Object
  })
  const handleError = () => clearError({ redirect: '/' })
</script>