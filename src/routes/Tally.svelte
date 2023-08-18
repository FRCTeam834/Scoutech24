<script>
    /**
	 * @type {string}
	 */
    export let label;
    /**
	 * @type {string}
	 */
     export let name;

    let count = 0

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }
</script>

<label for={name}>{label}:</label>
<br>
<button on:click={decrement}>-</button>
<input {name} id = {name} bind:value = {count}
    type="number" 
    inputmode="numeric"
    pattern="[0-9]+"
    />
<button on:click={increment}>+</button>
<br>

<style>
    input::-webkit-inner-spin-button {
    display: none;
    }
</style>