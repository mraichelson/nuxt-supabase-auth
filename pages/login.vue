<script lang="ts" setup>
const supabase = useSupabaseClient()

const login = async () => {
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
		<p>
			<button @click.prevent="login">Login with Github</button>
		</p>
		<UserCard />
	</article>
</template>
