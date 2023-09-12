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
<input {value} {name} id = {name} style="visibility: hidden; position: absolute;">
<button type = "button"  on:click={() => value = 1 - value}>
    {display}
</button>
<br>