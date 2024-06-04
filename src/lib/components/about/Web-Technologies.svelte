<script lang="ts">
    import { HtmlLogo, CSS3, TailwindLogo, Wordpress } from "$lib/images";
</script>

<div class="flex flex-row my-4 gap-2">
    <a href="https://html.com/html5/" target="_blank" class="tooltip tooltip-secondary" data-tip="HTML5">
        <img src={HtmlLogo} alt="HTML5" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" class="tooltip tooltip-secondary" data-tip="CSS3">
        <img src={CSS3} alt="CSS3" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://tailwindcss.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Tailwind CSS">
        <img src={TailwindLogo} alt="Tailwind CSS" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://wordpress.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Wordpress">
        <img src={Wordpress} alt="Wordpress" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
</div>