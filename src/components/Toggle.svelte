<script>
    /**
	 * @type {string}
	 */
     export let label;
    /**
	 * @type {string}
	 */
     export let name;

    let value = 0;
    $: display = (value == 0) ? "No" : "Yes"
</script>

<label for={name}>{label}</label><br>
<button {name} id = {name} on:click={() => value = 1 - value}>
    {display}
</button>
<br>