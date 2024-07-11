<script>
    import { onMount } from 'svelte';

    let emailAddress = '';

    onMount(() => {
        const encryptedEmail = 'aGVsbG8ud29ybGRAam9yZGFucm9iby54eXo='; 
        emailAddress = atob(encryptedEmail);
    });

</script>

<p>{emailAddress}</p>