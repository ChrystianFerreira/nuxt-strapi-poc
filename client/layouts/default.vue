<template>  
	<header class="bg-gray-900 text-white p-4">
		<nav class="flex items-center justify-between container mx-auto ">
			<NuxtLink to="/" aria-label="Home page">Butter</NuxtLink>

			<ul class="flex items-center justify-center gap-4 mx-auto">
				<li>
					<NuxtLink to="/" aria-label="Home page">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/about" aria-label="About us">Sobre</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/products" aria-label="Our products">Produtos</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/recipes" aria-label="Our recipes">Receitas</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>

	<slot />
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>