<template>
	<h1>Home</h1>

	<Hero :hero="hero" />
</template>

<script setup>
	const hero = ref();
	
	const getPageData = async () => {		
		const { find } = useStrapi4()

		try {
			const { data } = await find('home?populate=*');
			
			hero.value = { ...data.attributes.hero };
		} catch (e) {
			console.error(e);
		}
	}

	getPageData();
</script>

<style lang="scss" scoped>

</style>