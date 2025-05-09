<script setup lang="ts">
const user = useSupabaseUser()

const name = computed(() => user?.value.user_metadata.full_name)
const profile = computed(() => user?.value.user_metadata.avatar_url)
</script>

<template>
	<div v-if="user" class="user-card">
		<img width="50" height="50" alt="" role="presentation" :src="profile" />
		<div class="text-right">
			<div class="font-medium">{{ name }}</div>
			<button class="text-sm underline text-slate-500">Log out</button>
		</div>
	</div>
</template>
