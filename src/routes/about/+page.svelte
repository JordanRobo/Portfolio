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
    <div class="flex flex-col md:flex-row gap-4 mb-4 p-4">
        <div class="grid md:content-between w-full md:w-2/5 pt-6 space-y-4">
            <div>
                <h1 class="text-4xl font-bold">Jordan Robinson</h1>
                <h1 class="text-xl font-bold underline underline-offset-8 decoration-primary">Fullstack Developer</h1>
            </div>
            <div>
                <p class="text-sm text-white/50">Contact Me:</p>
                <a href="tel:+61492934502" target="_blank" class="flex items-center group text-accent transition-all duration-300 ease-in-out">
                    <Mobile class="text-white/50 group-hover:text-white/90 mr-2 h-4 w-4"/>
                    <span class="text-sm text-white/50 group-hover:text-white/90 bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"><PhoneNumber /></span>
                </a>
                <a href="mailto:hello.world@jordanrobo.xyz" target="_blank" class="flex items-center group text-accent transition-all duration-300 ease-in-out">
                    <EnvelopeOpen class="text-white/50 group-hover:text-white/90 mr-2 h-4 w-4"/>
                    <span class="text-sm text-white/50 group-hover:text-white/90 bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"><Email /></span>
                </a>
            </div>
        </div>
        <div class="w-full md:w-3/5">
            <p class="mt-4">Hey there! I'm a Full Stack Developer with a strong foundation in both front-end and back-end technologies. I'm excited to bring dynamic solutions to modern web challenges and make people's lives easier and more efficient through the power of <span class="font-bold italic underline underline-offset-8 decoration-secondary">code!</span>✨</p>
            <p class="mt-4">With expertise in HTML, CSS, and JavaScript, a tenacious drive to learn and a passion for creating seamless user experiences, I'm transitioning my career towards the innovative world of software development. Why? Because I firmly believe that technology should simplify our lives, <span class="font-bold italic underline underline-offset-8 decoration-secondary">not complicate</span> them. </p>
            <p class="mt-4">Coding isn't just a career choice for me; it's a way to make a real difference in people's lives. I aspire to create efficient, intuitive, and powerful software solutions, my goal is to streamline processes, automate tasks, and ultimately, give people more time to focus on what matters most.</p>
            <p class="mt-4">If you're looking for a developer who's committed to creating software that not only works flawlessly but also enhances the user experience, I'm your guy. <span class="font-bold italic underline underline-offset-8 decoration-secondary">Let's build something amazing together!</span> 🚀</p>
        </div>
    </div>

    <div class="flex flex-col md:flex-row gap-4 mb-4 p-4">
        <div class="w-full md:w-2/5 py-6">
            <h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Work Experience</h2>
        </div>
        <div class="w-full md:w-3/5 space-y-4">
            {#each workExp as job}
                <div class="relative border border-neutral space-y-1 transition duration-1000 md:duration-300 ease-in-out md:opacity-70 hover:opacity-100 transition-on-scroll">
                    <span class="absolute h-full w-full"></span>
                    <div class="p-2">
                        <p class="text-sm text-white/50">{job.start_date} - {job.end_date}</p>
                        <h1 class="text-xl font-bold">{job.position}</h1>
                        <p class="text-sm text-secondary">{job.company}</p>
                        <p class="text-sm mt-2">{job.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="flex flex-col md:flex-row gap-4 mb-4 p-4">
        <div class="w-full md:w-2/5 py-6">
            <h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Skills</h2>
        </div>
        <div class="w-full md:w-3/5">
            <div class="flex flex-row my-2 gap-8">
                <div>
                    <div class="flex flex-row">
                        <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Languages</h2>
                    </div>
                    <Languages />   
                </div>
            </div>
            <div class="flex flex-row gap-8">
                <div>
                    <div class="flex flex-row">
                        <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Web Technologies & Frameworks</h2>
                    </div>
                    <WebTechnologies />   
                </div>
            </div>
            <div class="flex flex-row gap-8">
                <div>
                    <div class="flex flex-row">
                        <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Databases & BaaS</h2>
                    </div>
                    <Databases />   
                </div>
            </div>
        </div>
    </div>
</div>