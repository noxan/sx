<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<main class="container mx-auto py-12">
	<section class="my-6">
		<h1 class="pb-2 text-xl">Welcome to SvelteKit</h1>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	</section>

	<section class="my-6">
		{#if $page.data.session}
			<pre><code>{JSON.stringify($page.data.session, null, 2)}</code></pre>
			<button on:click={() => signOut()}>Sign out</button>
		{:else}
			<p>You are not signed in</p>
			<button on:click={() => signIn('github')}>Sign In with GitHub</button>
		{/if}
	</section>
</main>
