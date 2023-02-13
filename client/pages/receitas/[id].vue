<template>
    <h1>Recipe by ID</h1>
    <h2>{{ id }}</h2>
</template>

<script setup>
    const { id } =  useRoute().params;
</script>

<style lang="scss" scoped>

</style>