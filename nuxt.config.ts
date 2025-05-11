// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/ui', '@nuxtjs/supabase'],
	supabase: {
		redirect: false, // MR: disable auto redirect to login screen
	},
	runtimeConfig: {
		githubToken: process.env.GITHUB_TOKEN,
		githubOrg: process.env.GITHUB_ORG,
	},
})
