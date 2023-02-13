<template>
	<h1>Sobre</h1>

	<Hero :hero="about.hero" />

	<p>{{ about.description }}</p>
</template>

<script setup>
	const about = ref({});
	
	const getPageData = async () => {		
		const { find } = useStrapi4()

		try {
			const { data } = await find('about?populate=*');
			
			about.value = { ...data.attributes };
		} catch (e) {
			console.error(e);
		}
	}

	getPageData();
</script>

<style lang="scss" scoped>

</style>