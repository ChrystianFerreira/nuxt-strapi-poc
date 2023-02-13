<template>
		<h1>Product by ID</h1>
    <h2>{{ id }}</h2>

		<section v-if="product">
			<article>
				<p>{{ product.name }}</p>

				<nuxt-img v-if="product.image" width="250px" :src="product.image.data.attributes.url" />
			</article>
		</section>
</template>

<script setup>
    const { id } =  useRoute().params;

    const product = ref({})
	
	const getPageData = async () => {		
		const { findOne } = useStrapi4();

		try {
			product.value = await findOne(`products/${id}/?populate=*`).then(res => res.data?.attributes);
		} catch (e) {
			console.error(e);
		}
	}

	getPageData();

</script>

<style lang="scss" scoped>

</style>