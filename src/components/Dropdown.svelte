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
</script>


<label for={name}>{label}:</label><br>
<select {name} id={name}>
    {#each Object.entries(selections) as [value, option]}
        <option value={value}>{option}</option>
    {/each}
</select>
<br>
