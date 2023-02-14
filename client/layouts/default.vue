<template>  
	<div class="h-screen">
		<header class="bg-white text-amber-300 font-bold p-4">
			<nav v-if="layout.header" class="flex items-center justify-between container mx-auto">
				<NuxtLink to="/" aria-label="Home page">
					<nuxt-img width="100px" :src="layout.header.logo.data.attributes.url" />
				</NuxtLink>

				<ul class="flex items-center justify-center gap-2 sm:gap-6 md:gap-8 lg:gap-12 mx-auto">
					<li v-for="link in layout.header.link" :key="link.id">
						<NuxtLink :to="link.url">{{ link.label }}</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>

		<slot />

		<footer v-if="layout.footer" class="bg-slate-50 flex flex-col gap-2 items-center justify-center bg-red-100">
			<p class="text-xl">{{ layout.footer.copyright }}</p>

			<div class="flex items-center justify-center gap-4">
				<a v-for="social in layout.footer.socialLink" :href="social.url">
					<p>
						{{ social.socialNetwork }}
					</p>
				</a>
			</div>
		</footer>
	</div>
</template>

<script setup>
const layout = ref({});

const getLayoutData = async () => {
	const { find } = useStrapi4()

	try {
		const footer = await find('footer?populate=*').then(res => res?.data?.attributes);
		const header = await find('menu?populate=*').then(res => res?.data?.attributes);

		layout.value = { 
			footer,
			header
		}
	} catch (e) {
		console.error(e);
	}
}

getLayoutData();
</script>

<style>
	div#__nuxt,
	#__layout,
	#__layout > div,
	#app {
		min-height: 100vh;
	}
</style>