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
	 * @type {{ [x: string]: string; }}
	 */
     export let selections;
     /**
	 * @type {string}
	 */
     export let type = "I";
</script>


<label for={name}>{label}:</label><br>
<select name = {name + type} id={name}>
    {#each Object.entries(selections) as [value, option]}
        <option value={value}>{option}</option>
    {/each}
</select>
<br>
