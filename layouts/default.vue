<script lang="ts" setup></script>

<template>
	<div class="layout-wrapper">
		<header>
			<NuxtLink to="/">Nuxt+Supabase Auth</NuxtLink>
		</header>
		<main>
			<slot />
		</main>
	</div>
</template>

<style>
.layout-wrapper {
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
header {
	background: #333;
	color: #fff;
	margin: -10px -10px 0;
	padding: 1.5rem;
	text-align: center;
	font-size: 2.75rem;
}
header a {
	color: #fff;
	text-decoration: none;
}
main {
	margin: 0 auto;
	padding: 1.5rem;
	max-width: 40rem;
}
</style>
