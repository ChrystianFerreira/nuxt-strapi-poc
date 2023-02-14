<template>
	<Hero 
		class="bg-gradient-to-b from-orange-400 via-orange-500 to-orange-400 text-white" 
		:hero="about.hero" 
	/>

	<p class="text-5xl">{{ about.description }}</p>
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