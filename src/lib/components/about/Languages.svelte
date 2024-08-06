<script lang="ts">
    import { Javascript, TypescriptLogo, HtmlLogo, CSS3, RustLogo, Python, CSharp } from "$lib/images";
</script>

<div class="flex flex-row my-4 gap-2">
    <a href="https://www.javascript.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="JavaScript">
        <img src={Javascript} alt="Javascript" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="TypeScript">
        <img src={TypescriptLogo} alt="Typescript" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://html.com/html5/" target="_blank" class="tooltip tooltip-secondary" data-tip="HTML5">
        <img src={HtmlLogo} alt="HTML5" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" class="tooltip tooltip-secondary" data-tip="CSS3">
        <img src={CSS3} alt="CSS3" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://www.rust-lang.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="Rust">
        <img src={RustLogo} alt="Rust" class="h-11 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://www.python.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="Python">
        <img src={Python} alt="Python" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
    <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" class="tooltip tooltip-secondary" data-tip="C# (C Sharp)">
        <img src={CSharp} alt="C#" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100 opacity-50 hover:opacity-100" />
    </a>
</div>