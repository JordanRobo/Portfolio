<script lang="ts">
    import "../app.css";
    import { Header, Footer } from "$lib";
    import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import type { LayoutData } from './$types';

    export let data: LayoutData;

	const duration = 300;
	const delay = duration + 100;
	const y = 10;
	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };
</script>


<div class="container max-w-3xl mx-auto">
    <div class="min-h-[93vh]">
        <Header />
        {#key data.pathname}
            <div in:fly={transitionIn} out:fly={transitionOut}>
                <slot />
            </div>
        {/key}
    </div>
    <Footer />
</div>
