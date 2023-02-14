<template>
	<Hero class="bg-gradient-to-b from-amber-200 via-amber-200 to-amber-100" :hero="hero" />

	<section class="bg-amber-100 flex flex-wrap flex-col sm:flex-row gap-y-4 gap-x-4 mb-4 justify-around items-center">
		<template v-if="recipes" v-for="recipe in recipes">
            <NuxtLink :to="`/receitas/${recipe.id}`">
                <p class="text-3xl">{{ recipe.attributes.name }}</p>
                <p class="text-2xl">{{ recipe.attributes.description }}</p>
            </NuxtLink>
		</template>
	</section>
</template>

<script setup>
const recipes = ref([]);

const getRecipesData = async () => {
	const { find } = useStrapi4()

	try {
		const { data: recipesList } = await find('recipes?populate=*');

		recipes.value = recipesList;
	} catch (e) {
		console.error(e);
	}
}

getRecipesData();

const hero = {
	heading: "Receitas no capricho têm gosto de Qualy",
	description: "Nada é mais gostoso do que preparar uma comidinha para os amigos ou para a família. Aqui você encontra receitas com Qualy para preparar com carinho, do jeito mais fácil.!"
}
</script>

<style lang="scss" scoped>

</style>