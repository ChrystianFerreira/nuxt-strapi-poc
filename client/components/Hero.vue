<template>
  <section v-if="hero && hero.heading">
    <h1 class="font-medium leading-tight text-5xl">{{ hero.heading }}</h1>

    <p class="font-medium leading-tight text-3xl">{{ hero.description }}</p>
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