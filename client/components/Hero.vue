<template>
  <section class="flex justify-center items-center flex-col h-72" v-if="hero && hero.heading">
    <h1 class="font-medium leading-tight text-4xl mb-4">{{ hero.heading }}</h1>

    <p class="font-medium leading-tight text-2xl">{{ hero.description }}</p>
  </section>
</template>

<script setup>
defineProps({
  hero: {
    type: Object,
    default: () => {
      return {};
    }
  }
});
</script>

<style lang="scss" scoped>

</style>