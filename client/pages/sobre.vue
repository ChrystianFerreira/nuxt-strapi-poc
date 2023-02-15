<template>
	<Hero 
		class="bg-gradient-to-b from-amber-100 via-amber-100 to-amber-50 mb-0" 
		:hero="about.hero" 
	/>

	<p class="bg-amber-50 text-5xl">{{ about.description }}</p>
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