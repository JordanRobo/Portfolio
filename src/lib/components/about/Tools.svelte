<script lang="ts">
    import { Git, GitHub, Docker, VS, VSCode, Linux, W11, Bash, DigitalOcean } from "$lib/images";
</script>

<div class="flex flex-row my-4 gap-2">
    <a href="https://www.git-scm.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Git">
        <img src={Git} alt="Git" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://github.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="GitHub">
        <img src={GitHub} alt="GitHub" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://www.docker.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Docker">
        <img src={Docker} alt="Docker" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://visualstudio.microsoft.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Visual Studio">
        <img src={VS} alt="Visual Studio" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://code.visualstudio.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Visual Studio Code">
        <img src={VSCode} alt="Visual Studio Code" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://www.linux.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="Linux">
        <img src={Linux} alt="Linux" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://www.microsoft.com/en-au/windows?r=1" target="_blank" class="tooltip tooltip-secondary" data-tip="Windows 11">
        <img src={W11} alt="Windows 11" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://www.gnu.org/software/bash/" target="_blank" class="tooltip tooltip-secondary" data-tip="Bash">
        <img src={Bash} alt="Bash" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://www.digitalocean.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Digital Ocean">
        <img src={DigitalOcean} alt="Digital Ocean" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
</div>