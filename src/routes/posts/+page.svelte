<script lang="ts">
    import { formatDate } from '$lib/utils';
    import { ChevronRight } from 'svelte-radix';

    export let data;
</script>

<div class="p-4 mt-8 space-y-4">
    <div class="flex justify-start">
        <div><h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Posts</h2></div>
    </div>
	{#each data.posts as post}
        <a href={`/posts/` + post.slug} class="p-4 group transition duration-300 ease-in-out md:opacity-70 hover:opacity-100">
            <div class="border border-neutral p-4 space-y-1">
                <p class="">{formatDate(post.date)}</p>
                <h1 class="text-xl font-bold">{post.title}</h1>
                <p class="">{post.description}</p>
                <div class="flex items-center group text-accent transition-all duration-300 ease-in-out">
                    <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out text-sm">read post</span>
                    <ChevronRight class="h-4 w-4"/>
                </div>
            </div>
        </a>
	{/each}
</div>