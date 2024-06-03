<script lang="ts">
	import { EnvelopeOpen, GithubLogo, LinkedinLogo } from "svelte-radix";
    import { formatDate } from '$lib/utils';
    import type { PageData } from "./$types.js";
    import { SvelteLogo, RustLogo, TailwindLogo, BunLogo, TypescriptLogo } from '$lib/images';
    
    export let data: PageData;
</script>

<div class="p-4 mt-8">
    <h1 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Hey there, I'm <span class="text-secondary">Jordan!</span></h1>
    <p class="mt-4">I am a budding Full Stack Developer with a strong foundation in both front-end and back-end technologies, ready to bring dynamic solutions to modern web challenges. With expertise in HTML, CSS, JavaScript, and a passion for creating seamless user experiences, I am transitioning my career towards the innovative world of software development.</p>
    <p class="mt-4">As I pivot my career path, my diverse background in digital marketing, content creation, and team leadership provides a unique perspective to software development. This cross-functional expertise allows me to approach development projects with an end-user focus, ensuring that the software I help create is not only functional but also user-friendly and market-ready.</p>
</div>
<div class="grid grid-cols-3 border border-neutral divide-x divide-neutral text-accent">
    <div class="p-4">
        <a href="https://github.com/JordanRobo" target="_blank" class="flex items-center group text-accent transition-all duration-300 ease-in-out">
            <GithubLogo class="mr-2 " />
            <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">@JordanRobo</span>
        </a>
    </div>
    <div class="p-4">
        <a href="https://www.linkedin.com/in/jordancr/" target="_blank" class="flex items-center group text-accent transition-all duration-300 ease-in-out">
            <LinkedinLogo class="mr-2" />
            <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">@jordancr</span>
        </a>
    </div>
    <div class="p-4">
        <a href="mailto:jordan@stateot.art" class="flex items-center group text-accent transition-all duration-300 ease-in-out">
            <EnvelopeOpen class="mr-2" />
            <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">jordan@stateot.art</span>
        </a>
    </div>
</div>
<div class="p-4 mt-8 space-y-4 flex items-center justify-between">
    <div><h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Currently Using</h2></div>
    <div class="flex flex-row space-x-4">
        <a href="https://www.typescriptlang.org/" target="_blank">
            <img src={TypescriptLogo} alt="Typescript" class="h-14 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
            <img src={TailwindLogo} alt="Tailwind CSS Logo" class="h-16 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
        </a>
        <a href="https://bun.sh/" target="_blank">
            <img src={BunLogo} alt="Bun Logo" class="h-16 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
        </a>
        <a href="https://svelte.dev/" target="_blank">
            <img src={SvelteLogo} alt="Svelte Logo" class="h-16 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
        </a>
        <a href="https://www.rust-lang.org/" target="_blank">
            <img src={RustLogo} alt="Rust Logo" class="h-14 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
        </a>
    </div>
</div>

<div class="p-4 mt-8 space-y-4">
    <div class="flex justify-between">
        <div><h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Working on</h2></div>
        <div>
            <a href="https://github.com/JordanRobo?tab=repositories" target="_blank" class="flex items-center group transition-all duration-300 ease-in-out text-accent/50 hover:text-accent">
                <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">See all projects</span>
            </a>
        </div>
    </div>
    <a href={data.repos.html_url} class="p-4">
        <div class="border border-neutral p-4 space-y-1">
            <h1 class="text-xl font-bold">{data.repos.name}</h1>
            <p class="pb-1">{data.repos.description}</p>
            <div class="badge badge-outline badge-secondary">{data.repos.language}</div>
        </div>
    </a>
</div>

<div class="p-4 mt-8 space-y-4">
    <div class="flex justify-between">
        <div><h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Recent Posts</h2></div>
        <div>
            <a href="/posts" class="flex items-center group transition-all duration-300 ease-in-out text-accent/50 hover:text-accent">
                <span class="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">See all posts</span>
            </a>
        </div>
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