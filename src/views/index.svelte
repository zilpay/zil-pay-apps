<script>
	import { link } from 'svelte-spa-router'
</script>

<main>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<div>
		<a use:link={'/domain'}>domain</a>
		<a use:link={'/sig'}>Sig</a>
	</div>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

		& > div {
			display: flex;
			flex-direction: column;
		}
	}
</style>
