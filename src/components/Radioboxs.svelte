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
    export let selection;
    /**
	 * @type {string}
	 */
    export let type = "I";

    let entrieLength = Object.entries(selections).length;
</script>

<label for={name}>{label}</label>
<!-- <select class={"select border-none overflow-y-hidden w-full "} size={entrieLength + 1} style="background:none; -webkit-appearance: none;" name = {name + type} id={name} value = {preset}> -->
{#each Object.entries(selections) as [value, option]}
    <!-- <input 
    name = {name + type} 
    id={name} {value} 
    bind:group={selection}
    type = "radio"
    class = "" />
    <button type = "button" 
    class = "mb-1 variant-ringed-tertiary bg-[#fefefe] btn w-full justify-start"
    on:click={selection = value}>
    {option}
    </button> -->
    <label for={value}>
        <input type="radio" name = {name + type} id={name} {value} bind:group={selection}>
        {option}
    </label>

{/each}
<!-- </select> -->
<br>
