<script lang="ts">
    import type { PageData } from "./$types.js";

    export let data: PageData;

    $: console.log(data);
</script>

<h1>My GitHub Repos</h1>

<ul>
    {#each data.repos as repo}
        <li>{repo.name}</li>
    {/each}
</ul>