<script lang="ts" setup>
const supabase = useSupabaseClient()

const logout = async () => {
	const { error } = await supabase.auth.signOut()

	if (error) {
		console.error(error)
		return
	}

	await navigateTo('/')
}
</script>

<template>
	<article>
		<h1>Log out</h1>
		<p>
			<button @click.prevent="logout">Get out of here!</button>
		</p>
		<UserCard />
	</article>
</template>
