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

    let value = 0;
    $: display = (value == 0) ? "No" : "Yes"
</script>

<label for={name}>{label}</label><br>
<input {value} name = {name + type} id = {name} style="visibility: hidden; position: absolute;">
<button type = "button"  on:click={() => value = 1 - value}>
    {display}
</button>
<br>