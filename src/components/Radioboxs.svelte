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
    export let preset;
</script>

<label for={name}>{label}</label><br>

{#each Object.entries(selections) as [value, option]}
    <input type="radio" {name} id={name} {value} checked = {preset == value}/>
    <label for={value}>{option}</label>
    <br>
{/each}

