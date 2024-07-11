<script>
    import { onMount } from 'svelte';

    let phoneNumber = '';

    onMount(() => {
        const encryptedNumber = 'MDQ5MiA5MzQgNTAy'; 
        phoneNumber = atob(encryptedNumber);
    });

</script>

<p>{phoneNumber}</p>