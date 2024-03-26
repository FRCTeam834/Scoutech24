<!-- 
    Input that acts as a yes or no button 

    0 : No
    1 : Yes
    
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

    let value = 0;
    $: display = (value == 0) ? "No" : "Yes"
</script>

<label for={name}>{label}</label>
<input {value} name = {name + type} id = {name} style="visibility: hidden; position: absolute;">
<button type = "button"  on:click={() => value = 1 - value} 
    class = {"font-semibold	text-white h-35 btn btn-lg w-full " + "bg-[#43bf83] ".repeat(value) +"bg-[#e63c5e]".repeat(1-value)}>
    {display}
</button>
