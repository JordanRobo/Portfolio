<script lang="ts">
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="contaner max-w-3xl mx-auto my-4 p-4">
	<div class="space-y-4 text-center mb-4">
		<h1 class="text-primary font-bold text-4xl">{data.meta.title}</h1>
		<p>Published on {formatDate(data.meta.date)}</p>
		{#each data.meta.categories as tag}
			<span class="badge badge-outline badge-secondary mr-2">{tag}</span>
		{/each}
		<div class="divider divider-tertiary"></div>
	</div>
	<div class="prose prose-main prose-invert mx-auto">
		<svelte:component this={data.content} />
	</div>
</article>
