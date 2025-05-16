<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()

// this string is temporary for dev use
const outcome = ref<'pending' | 'login' | 'block'>('pending')

/**
 * Identify if *this* Github user is a member of the
 * Organization used for access control.
 */
const validateGithubOrg = async (): boolean => {
	const { isAllowed } = await $fetch('/api/github-org-auth', {
		method: 'POST',
		body: {
			userName: user?.value.user_metadata.user_name,
		},
	})
	return isAllowed
}

watch(
	user,
	async () => {
		const isValidUser = await validateGithubOrg()

		if (!isValidUser) {
			// INVALID USER: send to message page
			const { error } = await supabase.auth.signOut()
			if (error) {
				console.error(error)
				return
			}

			await navigateTo('/invalid-user')
			return
		}
		// VALID USER: redirect to application
		navigateTo('/application')
	}
)
</script>

<template>
	<div>
		Waiting...<span>{{ outcome }}</span>
	</div>
</template>
