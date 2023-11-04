<script>
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
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

<RadioGroup 
active="variant-filled-primary" 
hover="hover:variant-soft-primary" 
rounded="rounded-container-token" 
display="flex-col"
background = "bg-tertiary-50-token"
padding = "py-2"

>
{#each Object.entries(selections) as [value, option]}
    <RadioItem 
    name = {name + type} value = {value} bind:group = {selection}>
        {option}
    </RadioItem>
{/each}
</RadioGroup>


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
    <!-- <label for={value}>
        <input type="radio" name = {name + type} id={name} {value} bind:group={selection}>
        {option}
    </label> -->
