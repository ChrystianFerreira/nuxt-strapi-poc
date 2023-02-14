<template>
	<div class="h-full bg-amber-300" v-if="home">
		<Hero 
			:hero="home.hero"
			class="bg-gradient-to-b from-yellow-300 via-yellow-400 to-amber-300 text-white" 
		/>
		
		<section class="flex flex-col items-center gap-4 mt-4">
			<h2>Encontre o que precisa</h2>
			<NuxtLink 
				v-for="button in home.buttons"
				:id="button.id"
				:to="button.url"
				class="bg-white hover:bg-gray-100 text-amber-900 font-semibold py-2 border border-yellow-900 rounded shadow" 
			>
				<!-- {{ button.attributes.label }} -->
				<span class="px-6">{{ button.label }}</span>
			</NuxtLink>
		</section>
	</div>
</template>

<script setup>
	const home = ref();
	
	const getPageData = async () => {		
		const { find } = useStrapi4()

		try {
			const { data } = await find('home?populate=*');
			
			home.value = { ...data.attributes };
		} catch (e) {
			console.error(e);
		}
	}

	getPageData();
</script>

<style lang="scss" scoped>

</style>