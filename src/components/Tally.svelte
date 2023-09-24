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

<label for={name}>{label}:</label><br>
<button type = "button" on:click={decrement}>-</button>
<input name = {name + type} id = {name} bind:value = {count}
    type="number" 
    inputmode="numeric"
    pattern="[0-9]+"
    />
<button type = "button" on:click={increment}>+</button>
<br>

<style>
    input::-webkit-inner-spin-button {
    display: none;
    }
</style>