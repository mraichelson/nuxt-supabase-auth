/**
 * Helper API for extending Supabase Github authentication:
 * - Only allow users that are part of an approved github
 *   organization to log in to the Nuxt application.
 *
 * - https://docs.github.com/en/rest/orgs/members?apiVersion=2022-11-28#check-organization-membership-for-a-user
 * - https://github.com/settings/personal-access-tokens
 */
export default defineEventHandler(async (event) => {
	const { githubToken, githubOrg } = useRuntimeConfig()
	const { userName } = await readBody(event)

	/**
	 * This is driven by HTTP status code because Github
	 * doesn't return any JSON data on a successful match.
	 */
	const { status } = await fetch(
		`https://api.github.com/orgs/${githubOrg}/members/${userName}`,
		{
			headers: {
				Authorization: `Bearer ${githubToken}`,
				Accept: 'application/vnd.github+json',
				'X-GitHub-Api-Version': '2022-11-28',
			},
		}
	)

	return { isAllowed: status === 204 ? true : false }
})
