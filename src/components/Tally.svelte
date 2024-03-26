<!-- 
    Input with one line text box that only takes numbers. 
    Has + and - button for incrementing value
    @input_type number
-->

<script>
    /**
	 * @type {string}
	 */
    export let label;
    /**
	 * @type {string}
	 */
    export let name;
    /**
	 * @type {string}
	 */
    export let type = "I";

    let count = 0

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }
</script>

<label for={name}>{label}:</label>
<!-- <button type = "button" on:click={decrement}>-</button> -->
<div class="grid grid-cols-4">
    <button type="button" class="bg-primary-500 rounded-none rounded-l-[1.3em] btn btn-lg variant-filled col-span-1" on:click={decrement}>-</button>
    <input name = {name + type} id = {name} bind:value = {count}
        type="number" 
        inputmode="numeric"
        pattern="[0-9]+"
        class = "input tally col-span-2 rounded-none bg-[#fefefe] border-transparent text-center"
        />
    
    <button type="button" class="bg-primary-500 h-35 rounded-none rounded-r-[1.3em] btn btn-lg variant-filled col-span-1" on:click={increment} >+</button>
</div>

<!-- <button type = "button" on:click={increment}>+</button> -->

<style>
    input::-webkit-inner-spin-button {
    display: none;
    }
</style>