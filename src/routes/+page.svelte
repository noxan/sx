<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/state';
	import logo from '$lib/assets/logo-192x192.png';
</script>

<section class="my-6">
	<img src={logo} alt="SvelteKit Logo" class="mb-4 h-32 w-32" />
	<h1 class="pb-2 text-xl">sx - sveltekit + x = everything</h1>
	<p>
		Visit <a href="https://kit.svelte.dev" class="hover:underline">kit.svelte.dev</a> to read the documentation
	</p>
</section>

<section class="my-6">
	<h2 class="pb-2 text-lg">Features</h2>
	<ul class="list-disc pl-6">
		<li><a href="/database" class="hover:underline">Database</a></li>
		<li><a href="/sentry-example" class="hover:underline">Sentry</a></li>
		<li><a href="/status" class="hover:underline">Status (API)</a></li>
	</ul>
</section>

<section class="my-6">
	<h2 class="pb-2 text-lg">Authentication</h2>
	{#if page.data.session}
		<div class="flex flex-row items-center gap-4">
			{#if page.data.session.user?.image}
				<img src={page.data.session.user.image} alt="User avatar" class="h-24 w-24 rounded-full" />
			{:else}
				<div class="h-24 w-24 rounded-full bg-gray-200"></div>
			{/if}
			<div>
				<p>{page.data.session.user?.name}</p>
				<p class="text-sm text-gray-600">{page.data.session.user?.email}</p>
				<button on:click={() => signOut()} class="mt-1">Sign out</button>
			</div>
		</div>
	{:else}
		<p>You are not signed in</p>
		<button on:click={() => signIn('github')}>Sign In with GitHub</button>
	{/if}
</section>
