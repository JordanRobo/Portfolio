<script>
    import "../app.css";
    import { Header, Footer } from "$lib";
</script>


<div class="container max-w-3xl mx-auto">
    <div class="min-h-[93vh]">
        <Header />
        <slot />
    </div>
    <Footer />
</div>
