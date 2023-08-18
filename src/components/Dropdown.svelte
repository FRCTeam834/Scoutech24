<script>
    /**
	 * @type {string}
	 */
    export let label;

     /**
	 * @type {any}
	 */
    export let selections;
     /**
	 * @type {string}
	 */
    export let name;
</script>


<label for={name}>{label}:</label><br>
<select {name} id={name}>
    {#each Object.entries(selections) as [value, option]}
        <option value={value}>{option}</option>
    {/each}
</select>
<br>
