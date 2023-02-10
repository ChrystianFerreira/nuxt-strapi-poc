<template>
	<h1>Home</h1>

	<Hero :data="hero" />
</template>


<script setup>
	const hero = reactive({});
	
	const getPageData = async () => {
		const { find } = useStrapi4()
		try {
			const { data } = await find('pages/1?populate=*');

			hero.value = { ...data.attributes.hero };
		} catch (e) {
			console.error(e);
		}
	}

	getPageData();
</script>

<style lang="scss" scoped>

</style>