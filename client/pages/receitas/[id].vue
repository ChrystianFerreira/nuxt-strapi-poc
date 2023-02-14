<template>
	<template v-if="recipe">
		<section>
			<article >
				<h1 >{{ recipe.name }}</h1>

                <nuxt-img v-if="recipe.image" class="h-48" :src="recipe.image.data.attributes.url" :alt="recipe.image.data.attributes.alternativeText"/>

                <p class="flex items-center text-center col-span-2 text-xl px-10">{{ recipe.description }}</p>
			</article>
		</section>

		<section class="flex flex-col justify-center items-center">
			<h2 class="text-4xl font-medium mb-1">Produtos usados</h2>

			<template v-if="recipe.products.data.length">
				<article v-for="product in recipe.products.data" class="mb-3">
					<NuxtLink :to="`/produtos/${product.id}`">
						<h4 class="font-medium">{{ product.attributes.name }}</h4>
						<p>{{ product.attributes.description }}</p>
					</NuxtLink>
				</article>
			</template>

			<template v-else>
				<h3 class="text-3xl">Não foi possível encontrar os produtos usados nessa receita. :(</h3>
			</template>
		</section>
	</template>
</template>

<script setup>
    const { id } =  useRoute().params;

    const recipe = ref(null)
	
	const getPageData = async () => {		
		const { findOne } = useStrapi4();

		try {
			recipe.value = await findOne(`recipes/${id}/?populate=*`).then(res => res.data?.attributes);
		} catch (e) {
			console.error(e);
		}
	}

	getPageData();

</script>

<style lang="scss" scoped>

</style>