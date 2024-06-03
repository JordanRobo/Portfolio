<script lang="ts">
    import { HtmlLogo, 
    SvelteLogo, 
    RustLogo, 
    TailwindLogo, 
    TypescriptLogo, 
    BunLogo, 
    Me,
    AdobeIllustrator,
    AdobePhotoshop,
    AdobePremiere,
    AdobeAfterEffects,
    Bash,
    CSS3,
    DigitalOcean,
    Docker,
    Figma,
    Git,
    GitHub,
    Javascript,
    Linux,
    NodeJS,
    MongoDB,
    Python,
    SQLite,
    Tauri,
    VS,
    VSCode,
    W11,
    Wordpress,
    Postgres,
    Firebase,
    Supabase  } from "$lib/images";
</script>

<div class="grid grid-cols-2 p-4 mt-4">
    <div class="border border-neutral p-4">
        <img src={Me} alt="Me" />
    </div>
    <div class="pl-4">
        <h1 class="text-2xl font-bold underline underline-offset-8 decoration-primary">About</h1>
        <p class="mt-4">I am a budding Full Stack Developer with a strong foundation in both front-end and back-end technologies, ready to bring dynamic solutions to modern web challenges. With expertise in a range of technologies, and a passion for creating seamless user experiences, I am transitioning my career towards the innovative world of software development.</p>
    </div>
    <div class="col-span-2 mt-4 gap-4">
        <h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Skills</h2>
        <div class="flex flex-row my-4">
            <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Languages & Frameworks</h2>
        </div>
        <div class="flex flex-row my-4 gap-2">
            <a href="https://www.javascript.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="JavaScript">
                <img src={Javascript} alt="Javascript" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="TypeScript">
                <img src={TypescriptLogo} alt="Typescript" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
            <a href="https://nodejs.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="Node JS">
                <img src={NodeJS} alt="Node JS" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
            <a href="https://bun.sh/" target="_blank" class="tooltip tooltip-secondary" data-tip="Bun">
                <img src={BunLogo} alt="Bun" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
            <a href="https://svelte.dev/" target="_blank" class="tooltip tooltip-secondary" data-tip="Svelte">
                <img src={SvelteLogo} alt="Svelte" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
            <a href="https://www.rust-lang.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="Rust">
                <img src={RustLogo} alt="Rust" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
            <a href="https://www.python.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="Python">
                <img src={Python} alt="Python" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
            <a href="https://tauri.app/" target="_blank" class="tooltip tooltip-secondary" data-tip="Tauri">
                <img src={Tauri} alt="Tauri" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
        </div>
        <div class="flex flex-row my-4 gap-6">
            <div>
                <div class="flex flex-row my-4">
                    <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Web Technologies</h2>
                </div>
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
            </div>
            <div>
                <div class="flex flex-row my-4">
                    <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Databases</h2>
                </div>
                <div class="flex flex-row my-4 gap-2">
                    <a href="https://www.postgresql.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="PostgresSQL">
                        <img src={Postgres} alt="PostgresSQL" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
                    </a>
                    <a href="https://sqlite.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="SQLite">
                        <img src={SQLite} alt="SQLite" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
                    </a>
                    <a href="https://www.mongodb.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Mongo DB">
                        <img src={MongoDB} alt="Mongo DB" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
                    </a>
                    <a href="https://firebase.google.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Google Firebase">
                        <img src={Firebase} alt="Google Firebase" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
                    </a>
                    <a href="https://supabase.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Supabase">
                        <img src={Supabase} alt="Supabase" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
                    </a>
                </div>
            </div>
        </div>
        <div class="flex flex-row my-4">
            <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Tools & Platforms</h2>
        </div>
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

        <div class="flex flex-row my-4">
            <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Design & Multimedia</h2>
        </div>
        <div class="flex flex-row my-4 gap-2">
            <a href="https://www.figma.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Figma">
                <img src={Figma} alt="Figma" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
            <a href="https://www.adobe.com/au/products/illustrator.html" target="_blank" class="tooltip tooltip-secondary" data-tip="Adobe Illustrator">
                <img src={AdobeIllustrator} alt="Adobe Illustrator" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
            <a href="https://www.adobe.com/au/products/aftereffects.html" target="_blank" class="tooltip tooltip-secondary" data-tip="Adobe After Effects">
                <img src={AdobeAfterEffects} alt="Adobe After Effects" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
            <a href="https://www.adobe.com/au/products/photoshop.html" target="_blank" class="tooltip tooltip-secondary" data-tip="Adobe Photoshop">
                <img src={AdobePhotoshop} alt="Adobe Photoshop" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
            <a href="https://www.adobe.com/au/products/premiere.html" target="_blank" class="tooltip tooltip-secondary" data-tip="Adobe Premiere Pro">
                <img src={AdobePremiere} alt="Adobe Premiere Pro" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
            </a>
        </div>
    </div>
    <div class="col-span-2 mt-4">
        <h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Work Experience</h2>
    </div>
</div>