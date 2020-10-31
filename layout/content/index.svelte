<script>
	export let title, intro, allContent;
	import Grid from "../components/grid.svelte";
	// import { loadComponent } from "../scripts/load_component.svelte";
</script>

<div class="text-xl font-semibold text-gray-700 p-5">
	<h1>{title}</h1>
</div>

<div class="text-base font-normal p-5">
	<section id="intro">
		{#each intro as paragraph}
			<p>
				{@html paragraph}
			</p>
		{/each}
	</section>

	<div class="p-2">
		<h3 class="text-gray-700 text-lg font-bold">Recent blog posts:</h3>
		<Grid items={allContent} filter="blog" />
		<br />
	</div>
</div>

<!-- {#if components}
	{#each components as { component, fields }}
		{#await loadComponent(component)}
			loading component...
		{:then compClass}
			<svelte:component this={compClass} {...fields} />
		{:catch error}
			{console.log(error.message)}
		{/await}
	{/each}
{/if} -->
