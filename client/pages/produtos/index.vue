<template>
	<Hero class="bg-gradient-to-b from-amber-100 via-amber-100 to-amber-50" :hero="hero" />

	<section class="bg-amber-50 flex flex-wrap flex-col sm:flex-row gap-y-4 gap-x-4 mb-4 justify-around items-center">
		<template v-if="products" v-for="product in products">
			<ProductCard :product="product" />
		</template>
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

const hero = {
	heading: "Produtos",
	description: "Conheça a linha de produtos e encontre receitas!"
}
</script>

<style lang="scss" scoped>

</style>