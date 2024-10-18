<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<section class="my-6">
	<h1 class="pb-2 text-xl">Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://kit.svelte.dev" class="hover:underline">kit.svelte.dev</a> to read the documentation
	</p>
</section>

<section class="my-6">
	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<img src={$page.data.session.user.image} alt="User avatar" class="h-32 w-32 rounded-full" />
		{:else}
			<div class="h-32 w-32 rounded-full bg-gray-200" />
		{/if}
		<pre><code>{JSON.stringify($page.data.session, null, 2)}</code></pre>
		<button on:click={() => signOut()}>Sign out</button>
	{:else}
		<p>You are not signed in</p>
		<button on:click={() => signIn('github')}>Sign In with GitHub</button>
	{/if}
</section>
