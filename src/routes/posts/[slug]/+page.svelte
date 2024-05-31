<script lang="ts">
	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="contaner max-w-3xl mx-auto my-8">
	<div class="prose prose-main prose-invert mx-auto">
		<svelte:component this={data.content} />
	</div>
</article>
