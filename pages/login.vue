<script lang="ts" setup>
const supabase = useSupabaseClient()
const isError = ref<boolean>(false)

const login = async () => {
	const { error } = await supabase.auth.signInWithOAuth({
		provider: 'github',
		options: {
			// Make sure post-auth redirection is back to the
			// instance being viewed...
			redirectTo: `${location.origin}/confirm`,
		},
	})

	if (error) {
		console.error(error)
	}
}
</script>

<template>
	<article>
		<h1>Login screen</h1>
		<p v-if="!isError">
			<button @click.prevent="login">Login with Github</button>
		</p>
		<p v-else>Oops, something went wrong. Sorry.</p>
		<UserCard />
	</article>
</template>
