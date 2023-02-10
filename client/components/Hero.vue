<template>
  <section>
    <h1>{{ hero.heading }}</h1>

    <p>{{ hero.description }}</p>
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