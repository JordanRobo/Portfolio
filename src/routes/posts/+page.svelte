<script lang="ts">
    import { formatDate } from '$lib/utils';

    export let data;
</script>

<div class="p-4 mt-8 space-y-4">
    <div class="flex justify-start">
        <div><h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Posts</h2></div>
    </div>
	{#each data.posts as post}
    <a href={`/posts/` + post.slug} class="p-4">
        <div class="border border-neutral p-4 space-y-1">
            <p class="">{formatDate(post.date)}</p>
            <h1 class="text-xl font-bold">{post.title}</h1>
            <p class="">{post.description}</p>
        </div>
    </a>
	{/each}
</div>