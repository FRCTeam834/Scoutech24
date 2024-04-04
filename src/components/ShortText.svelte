<!-- 
    Input with a one line text box
    @input_type string
-->

<script>
    /**
	 * @type {String}
	 */
    export let label;
    /**
	 * @type {string}
	 */
     export let name;
    /**
	 * @type {string}
	 */
     export let text = "";
    /**
	 * @type {string}
	 */
     export let type = "S";
</script>

<label for={name}>{label}</label>
<input type="text" name = {name + type} id = {name} bind:value={text}
        class="input rounded-[1em] bg-[#fefefe] border-transparent" 
/>
<br/>