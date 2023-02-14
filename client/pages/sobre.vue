<template>
	<Hero 
		class="bg-gradient-to-b from-amber-300 via-amber-300 to-amber-200 mb-0" 
		:hero="about.hero" 
	/>

	<p class="bg-amber-200 text-5xl">{{ about.description }}</p>
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