<script>
    import { onMount } from 'svelte';

    let phoneNumber = '';

    onMount(() => {
        const encryptedNumber = 'MDQ5MiA5MzQgNTAy'; // Replace with your encrypted phone number
        phoneNumber = atob(encryptedNumber);
    });

</script>

<p>{phoneNumber}</p>