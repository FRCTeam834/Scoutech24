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

<label for={name}>{label}</label>
<input {value} name = {name + type} id = {name} style="visibility: hidden; position: absolute;">
<button type = "button"  on:click={() => value = 1 - value} 
    class = {"variant-filled-primary h-35 btn btn-lg w-full " + "bg-[#43bf83]".repeat(value)}>
    {display}
</button>
