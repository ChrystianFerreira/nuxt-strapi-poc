<template>
    <h1>Product by ID</h1>
    <h2>{{ id }}</h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti blanditiis sunt aliquid fugit nulla
        libero excepturi voluptas, quos in soluta eligendi eius dolorem nihil illum, ducimus debitis animi natus
        incidunt aliquam dolor est quibusdam. Autem dolorum totam et numquam officiis in beatae saepe harum, suscipit
        placeat temporibus esse aliquid.</p>
</template>

<script setup>
    const { id } =  useRoute().params;
</script>

<style lang="scss" scoped>

</style>