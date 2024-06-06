<script lang="ts">
    import { Postgres, SQLite, MongoDB, Firebase, Supabase } from "$lib/images";
</script>

<div class="flex flex-row my-4 gap-1">
    <a href="https://www.postgresql.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="PostgresSQL">
        <img src={Postgres} alt="PostgresSQL" class="mr-1 h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://sqlite.org/" target="_blank" class="tooltip tooltip-secondary" data-tip="SQLite">
        <img src={SQLite} alt="SQLite" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://www.mongodb.com/" target="_blank" class="-mx-2 tooltip tooltip-secondary" data-tip="Mongo DB">
        <img src={MongoDB} alt="Mongo DB" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://firebase.google.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Google Firebase">
        <img src={Firebase} alt="Google Firebase" class="h-12 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
    <a href="https://supabase.com/" target="_blank" class="tooltip tooltip-secondary" data-tip="Supabase">
        <img src={Supabase} alt="Supabase" class="h-11 object-contain transition duration-300 ease-in-out saturate-0 hover:saturate-100" />
    </a>
</div>