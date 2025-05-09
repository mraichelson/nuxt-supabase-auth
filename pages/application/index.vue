<script lang="ts" setup>
definePageMeta({
	middleware: ['auth'],
})
</script>
<template>
	<article>
		<h1>Application</h1>
		<p>Only logged-in users can visit this page.</p>
	</article>
	<UserCard />
</template>
