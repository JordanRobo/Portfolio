<script lang="ts">
	import { ChevronRight, EnvelopeOpen, GithubLogo, LinkedinLogo } from "svelte-radix";
    import { formatDate } from '$lib/utils';
    import type { PageData } from "./$types.js";
    import { SvelteLogo, RustLogo, TailwindLogo, BunLogo, TypescriptLogo } from '$lib/images';
	import { Email } from "$lib";
    
    export let data: PageData;
</script>

<svelte:head>
    <title>Jordan's Website</title>
    <meta name="description" content="A collection of posts and information by and about Jordan Robinson." />
</svelte:head>

<div class="p-4 mt-8">
    <h1 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Hey there, I'm <span class="text-secondary">Jordan!</span></h1>
    <p class="mt-4">Welcome to my website! It's an honour to have you visit my little pocket of the internet and I hope you enjoy your visit. This site is a collection of information about myself and what projects I'm working on or have worked on.</p>
    <p class="mt-4">Have a browse and maybe read an article or two. I hope you enjoy what you find.</p>
</div>

<div class="flex flex-col md:flex-row w-full md:border border-neutral divide-x divide-neutral text-accent">
    <div class="p-4 grow">
        <a href="https://github.com/JordanRobo" target="_blank" class="flex items-center group text-accent transition-all duration-300 ease-in-out">
            <GithubLogo class="mr-2 " />
            <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">@JordanRobo</span>
        </a>
    </div>
    <div class="p-4 grow">
        <a href="https://www.linkedin.com/in/jordancr/" target="_blank" class="flex items-center group text-accent transition-all duration-300 ease-in-out">
            <LinkedinLogo class="mr-2" />
            <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">@jordancr</span>
        </a>
    </div>
    <div class="p-4">
        <a href="mailto:hello.world@jordanrobo.xyz" class="flex items-center group text-accent transition-all duration-300 ease-in-out">
            <EnvelopeOpen class="mr-2" />
            <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"><Email /></span>
        </a>
    </div>
</div>
<div class="p-4 mt-8 space-y-4 flex items-center justify-between">
    <div><h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Current Stack</h2></div>
    <div class="flex flex-row space-x-4">
        <a href="https://www.typescriptlang.org/" target="_blank">
            <img src={TypescriptLogo} alt="Typescript" class="h-14 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-70 hover:opacity-100" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
            <img src={TailwindLogo} alt="Tailwind CSS Logo" class="h-16 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-70 hover:opacity-100" />
        </a>
        <a href="https://bun.sh/" target="_blank">
            <img src={BunLogo} alt="Bun Logo" class="h-16 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-70 hover:opacity-100" />
        </a>
        <a href="https://svelte.dev/" target="_blank">
            <img src={SvelteLogo} alt="Svelte Logo" class="h-16 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-70 hover:opacity-100" />
        </a>
        <a href="https://www.rust-lang.org/" target="_blank">
            <img src={RustLogo} alt="Rust Logo" class="h-14 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-70 hover:opacity-100" />
        </a>
    </div>
</div>

<div class="p-4 mt-8 space-y-4">
    <div class="flex flex-col md:flex-row justify-between gap-2">
        <div><h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Current Project</h2></div>
        <div>
            <a href="https://github.com/JordanRobo?tab=repositories" target="_blank" class="flex items-center group transition-all duration-300 ease-in-out text-accent/50 hover:text-accent">
                <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">See all projects</span>
            </a>
        </div>
    </div>
    {#await data.projects}
        <p>Loading project...</p>
    {:then projects}
        <a href="{projects.html_url}" class="p-4 group transition duration-300 ease-in-out md:opacity-70 hover:opacity-100">
            <div class="border border-neutral p-4 space-y-2">
                <h1 class="text-xl font-bold">{projects.name}</h1>
                <div class="space-x-2">
                    {#each Object.entries(projects.languages).sort((a, b) => b[1] - a[1]).slice(0, 3) as [language]}
                        <span class="badge badge-outline badge-secondary">{language}</span>
                    {/each}
                </div>
                <p class="pb-1">{projects.description}</p>
                <div class="flex items-center group text-accent transition-all duration-300 ease-in-out">
                    <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out text-sm">view project</span>
                    <ChevronRight class="h-4 w-4"/>
                </div>
            </div>
        </a>
    {:catch error}
        <p>Error fetching project: {error.message}</p>
    {/await}
</div>

<div class="p-4 mt-8 space-y-4">
    <div class="flex flex-col md:flex-row justify-between gap-2">
        <div><h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Recent Posts</h2></div>
        <div>
            <a href="/posts" class="flex items-center group transition-all duration-300 ease-in-out text-accent/50 hover:text-accent">
                <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">See all posts</span>
            </a>
        </div>
    </div>
	{#each data.posts as post}
        <a href={`/posts/` + post.slug} class="p-4 group transition duration-300 ease-in-out md:opacity-70 hover:opacity-100">
            <div class="border border-neutral p-4 space-y-1">
                <p class="">{formatDate(post.date)}</p>
                <h1 class="text-xl font-bold">{post.title}</h1>
                {#each post.categories as tag}
                    <span class="badge badge-outline badge-secondary mr-2">{tag}</span>
                {/each}
                <p class="">{post.description}</p>
                <div class="flex items-center group text-accent transition-all duration-300 ease-in-out">
                    <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out text-sm">read post</span>
                    <ChevronRight class="h-4 w-4"/>
                </div>
            </div>
        </a>
	{/each}

</div> 
