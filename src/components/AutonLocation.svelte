<script>
    import { onMount } from 'svelte';

    let canvas;

    onMount(() => {
        const ctx = canvas.getContext('2d');
        
    })


</script>

<canvas bind:this={canvas} width={1462} height={1147} />

<style>
    canvas{
		width: 100%;
		height: 100%;   
        background-image: url("/feild.png");
        background-size: cover;
    }
</style>