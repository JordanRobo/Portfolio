<script lang="ts">
    import { EnvelopeOpen, Mobile } from "svelte-radix";
    import { Databases, Languages, WebTechnologies } from "$lib/components/about";
    import Work from "$lib/work_experience.json";
    import { PhoneNumber, Email } from "$lib";
    
    interface WorkExp {
        company: string;
        position: string;
        start_date: string;
        end_date: string;
        description: string;
    }

    let workExp: WorkExp[] = Work;
</script>

<div class="flex flex-col">
    <div class="flex flex-row gap-4 mb-4">
        <div class="grid content-between w-2/5 pt-6">
            <div>
                <p class="text-sm text-white/50">Contact Me:</p>
                <a href="tel:+61492934502" target="_blank" class="flex items-center group text-accent transition-all duration-300 ease-in-out">
                    <Mobile class="text-white/50 group-hover:text-white/90 mr-2 h-4 w-4"/>
                    <span class="text-sm text-white/50 group-hover:text-white/90 bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"><PhoneNumber /></span>
                </a>
                <a href="mailto:jordan@stateot.art" target="_blank" class="flex items-center group text-accent transition-all duration-300 ease-in-out">
                    <EnvelopeOpen class="text-white/50 group-hover:text-white/90 mr-2 h-4 w-4"/>
                    <span class="text-sm text-white/50 group-hover:text-white/90 bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"><Email /></span>
                </a>
            </div>
            <div>
                <h1 class="text-4xl font-bold">Jordan Robinson</h1>
                <h1 class="text-xl font-bold underline underline-offset-8 decoration-primary">Fullstack Developer</h1>
            </div>
        </div>
        <div class="w-3/5">
            <p class="mt-4">I am a budding Full Stack Developer with a strong foundation in both front-end and back-end technologies, ready to bring dynamic solutions to modern web challenges. With expertise in HTML, CSS, JavaScript, and a passion for creating seamless user experiences, I am transitioning my career towards the innovative world of software development.</p>
            <p class="mt-4">As I pivot my career path, my diverse background in digital marketing, content creation, and team leadership provides a unique perspective to software development. This cross-functional expertise allows me to approach development projects with an end-user focus, ensuring that the software I help create is not only functional but also user-friendly and market-ready.</p>
        </div>
    </div>

    <div class="flex flex-row gap-4 my-4">
        <div class="grid content-end w-2/5 p-2">
            <h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Work Experience</h2>
        </div>
        <div class="w-3/5 space-y-4">
            {#each workExp as job}
                <div class="relative border border-neutral space-y-1">
                    <span class="absolute h-full w-full"></span>
                    <div class="p-2">
                        <p class="text-sm text-white/50">{job.start_date} - {job.end_date}</p>
                        <h1 class="text-xl font-bold">{job.position}</h1>
                        <p class="text-sm text-secondary">{job.company}</p>
                        <p class="mt-2">{job.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="flex flex-row gap-4 my-4">
        <div class="grid content-end w-2/5 p-2">
            <h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Skills</h2>
        </div>
        <div class="w-3/5">
            <div class="flex flex-row my-2 gap-8">
                <div>
                    <div class="flex flex-row">
                        <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Languages & Frameworks</h2>
                    </div>
                    <Languages />   
                </div>
            </div>
            <div class="flex flex-row gap-8">
                <div>
                    <div class="flex flex-row">
                        <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Web Technologies</h2>
                    </div>
                    <WebTechnologies />   
                </div>
            </div>
            <div class="flex flex-row gap-8">
                <div>
                    <div class="flex flex-row">
                        <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Databases</h2>
                    </div>
                    <Databases />   
                </div>
            </div>
        </div>
    </div>
</div>
