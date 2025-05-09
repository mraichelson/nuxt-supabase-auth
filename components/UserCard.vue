<script setup lang="ts">
const user = useSupabaseUser()

const name = computed(() => user?.value.user_metadata.full_name)
const profile = computed(() => user?.value.user_metadata.avatar_url)
</script>

<template>
	<div v-if="user" class="user-card">
		<img width="50" height="50" alt="" role="presentation" :src="profile" />
		<div>
			<p>
				<b>{{ name }}</b
				><br />
				<NuxtLink to="/logout">Logout</NuxtLink>
			</p>
		</div>
	</div>
</template>

<style>
.user-card {
	border: 1px solid #ccc;
	background-color: #eee;
	padding: 0.5rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	max-width: max-content;
	position: fixed;
	top: 1rem;
	right: 1rem;
}
.user-card img {
	vertical-align: bottom;
}
.user-card p {
	margin: 0;
}
</style>
