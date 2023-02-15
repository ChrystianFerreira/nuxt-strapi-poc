<template>
	<template v-if="product">
		<section class="bg-amber-200">
			<article class="py-10">
				<h1 class="text-5xl font-bold text-center mb-8">{{ product.name }}</h1>

				<div class="grid grid-cols-3 content-center gap-4">
					<div class="flex justify-center items-center">
						<nuxt-img v-if="product.image" class="h-48" :src="product.image.data.attributes.url" :alt="product.image.data.attributes.alternativeText"/>
					</div>

					<p class="flex items-center text-center col-span-2 text-xl px-10">{{ product.description }}</p>
				</div>
			</article>
		</section>

		<section class="pt-16 bg-gradient-to-b from-amber-200 via-amber-100 to-yellow-100 flex flex-col justify-center items-center">
			<h2 class="text-4xl font-medium mb-1">Receitas</h2>

			<template v-if="product.recipes.data.length">
				<article v-for="recipe in product.recipes.data" class="mb-8">
					<NuxtLink :to="`/receitas/${recipe.id}`">
						<h4 class="font-medium">{{ recipe.attributes.name }}</h4>
						<p>{{ recipe.attributes.description }}</p>
					</NuxtLink>
				</article>
			</template>

			<template v-else>
				<h3 class="text-3xl mb-8">Não foi possível encontrar receitas para esse produto. :(</h3>
			</template>
		</section>
	</template>
</template>

<script setup>
	const { id } =  useRoute().params;
	const { findOne } = useStrapi4();
	
	const { data } = await useAsyncData(
		'product',
		() => findOne(`products/${id}/?populate=*`));

	const product = { ...data._rawValue.data.attributes };	

	useHead({
		title: product.name,
		meta: [
			{ hid: 'og:image', property: 'og:image', content: product.image.data.attributes.url }
		]
	});

</script>

<style lang="scss" scoped>

</style>