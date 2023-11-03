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


<label for={name}>{label}:</label>
<select name = {name + type} id={name} class = "select pt-[.75em] pb-[.75em] bg-[#fefefe] rounded-[1.3em]">
    {#each Object.entries(selections) as [value, option]}
        <option value={value}>{option}</option>
    {/each}
</select>
