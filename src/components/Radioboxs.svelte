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
	 * @type {any}
	 */
    export let selections;
</script>

<label for={name}>{label}</label><br>

{#each Object.entries(selections) as [value, option]}
    <input type="radio" {name} id={name} {value}>
    <label for={value}>{option}</label>
    <br>
{/each}

