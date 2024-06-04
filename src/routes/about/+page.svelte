<script lang="ts">
    import { Me } from "$lib/images";
    import { Databases, Languages, WebTechnologies, Tools } from "$lib/components/about";
</script>

<div class="flex flex-col">
    <div class="flex flex-row gap-4">
        <div class="w-1/3 pt-6">
            <img src={Me} alt="Me" class="max-h-72 outline outline-neutral outline-offset-8 outline-1" />
        </div>
        <div class="w-2/3 p-2">
            <h1 class="text-2xl font-bold underline underline-offset-8 decoration-primary">About</h1>
            <p class="mt-4">I am a budding Full Stack Developer with a strong foundation in both front-end and back-end technologies, ready to bring dynamic solutions to modern web challenges. With expertise in HTML, CSS, JavaScript, and a passion for creating seamless user experiences, I am transitioning my career towards the innovative world of software development.</p>
            <p class="mt-4">As I pivot my career path, my diverse background in digital marketing, content creation, and team leadership provides a unique perspective to software development. This cross-functional expertise allows me to approach development projects with an end-user focus, ensuring that the software I help create is not only functional but also user-friendly and market-ready.</p>
        </div>
    </div>
    <div class="mt-4 gap-4 mx-auto">
        <h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Skills</h2>
        <div class="flex flex-row my-4">
            <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Languages & Frameworks</h2>
        </div>
        <Languages />
        <div class="flex flex-row my-4 gap-6">
            <div>
                <div class="flex flex-row my-4">
                    <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Web Technologies</h2>
                </div>
            <WebTechnologies />    
            </div>
            <div>
                <div class="flex flex-row my-4">
                    <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Databases</h2>
                </div>
            <Databases />    
            </div>
        </div>
        <div class="flex flex-row my-4">
            <h2 class="text font-bold underline underline-offset-8 decoration-secondary">Tools & Platforms</h2>
        </div>
        <Tools />
    </div>
    <div class="mt-4 mx-auto">
        <h2 class="text-2xl font-bold underline underline-offset-8 decoration-primary">Work Experience</h2>
    </div>
</div>