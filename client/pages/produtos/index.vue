<template>
	<h1>Produtos</h1>

	<h2>Acesse os produtos e encontre receitas!</h2>

	<section>
		<NuxtLink v-for="product in products" :to="`produtos/${product.id}`">
		<article>
			<h3>{{ product.attributes.name }}</h3>

			<nuxt-img v-if="product.attributes.image" width="250px" :src="product.attributes.image.data.attributes.url" />
		</article>
	</NuxtLink>

	</section>
</template>

<script setup>
	const products = ref([]);
	
	const getPageData = async () => {		
		const { find } = useStrapi4()

		try {
			const { data: productsList } = await find('products?populate=*');
			
			products.value = productsList;
		} catch (e) {
			console.error(e);
		}
	}

	getPageData();
</script>

<style lang="scss" scoped>

</style>