<script lang="ts">
    import { Tauri, TailwindLogo, Wordpress, NodeJS, BunLogo, SvelteLogo, NET } from "$lib/images";
</script>

<div class="flex flex-row my-4 gap-2">
    <a href="https://nodejs.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="Node JS">
        <img src={NodeJS} alt="Node JS" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://bun.sh/" target="_blank" class="tooltip tooltip-secondary" data-tip="Bun">
        <img src={BunLogo} alt="Bun" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://svelte.dev/" target="_blank" class="tooltip tooltip-secondary" data-tip="Svelte">
        <img src={SvelteLogo} alt="Svelte" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://tauri.app/" target="_blank" class="tooltip tooltip-secondary" data-tip="Tauri">
        <img src={Tauri} alt="Tauri" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://dotnet.microsoft.com/en-us/download" target="_blank" class="tooltip tooltip-secondary" data-tip=".NET Core">
        <img src={NET} alt=".NET Core" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://tailwindcss.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Tailwind CSS">
        <img src={TailwindLogo} alt="Tailwind CSS" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://wordpress.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Wordpress">
        <img src={Wordpress} alt="Wordpress" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
</div>