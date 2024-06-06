<script>
    import { onMount } from 'svelte';

    let emailAddress = '';

    onMount(() => {
        const encryptedNumber = 'am9yZGFuQHN0YXRlb3QuYXJ0'; // Replace with your encrypted phone number
        emailAddress = atob(encryptedNumber);
    });

</script>

<p>{emailAddress}</p>