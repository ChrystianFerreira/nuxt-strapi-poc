<template>
  <article>
    <NuxtLink 
			:to="`produtos/${product.id}`"
			class="
				w-60 h-96 my-auto
				flex flex-col
				bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
			">
				<div class="w-sm h-52 m-2 flex-1">
					<nuxt-img 
						v-if="product.attributes.image" 
						:src="product.attributes.image.data.attributes.url"
						:alt="product.attributes.image.data.attributes.alternativeText"
						class="mx-auto my-auto h-52"
					/>
				</div>

			<div class="p-5 flex flex-col">
				<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
					{{ product.attributes.name }}
				</h3>

				<button
					class="
						inline-flex items-center
						px-3 py-2 mt-3
						text-sm font-medium text-center text-white 
						bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-200 
						dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700
					"
				>
					Descubra mais
					<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"></path>
					</svg>
				</button>
			</div>
		</NuxtLink>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>

</style>