<script lang="ts" setup>
const supabase = useSupabaseClient()

const login = async () => {
	console.log('LOGIN')

	const { error } = await supabase.auth.signInWithOAuth({
		provider: 'github',
	})

	if (error) {
		console.error(error)
	}
}
</script>
<template>
	<article>
		<h1>Login screen</h1>

		<button @click.prevent="login">Login with Github</button>
	</article>
</template>
