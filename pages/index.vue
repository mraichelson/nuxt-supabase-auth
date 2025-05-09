<script lang="ts" setup></script>

<template>
	<article>
		<h1>Homepage</h1>
		<ul>
			<li><NuxtLink to="/login">Log in</NuxtLink></li>
			<li>
				<NuxtLink to="/logout">Log out</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/application">Protected route</NuxtLink>
			</li>
		</ul>
		<UserCard />
	</article>
</template>
