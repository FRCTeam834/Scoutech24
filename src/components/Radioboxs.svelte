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
    /**
	 * @type {string}
	 */
    export let type = "I";

    let entrieLength = Object.entries(selections).length;
</script>

<label for={name}>{label}</label>
<select class={"select border-none overflow-y-hidden w-full "} size={entrieLength + 1} style="background:none;" name = {name + type} id={name} value = {preset}>
{#each Object.entries(selections) as [value, option]}
    <option {value}
    class="rounded-[.1em] text-lg text-black variant-filled-primary w-[110%]"
    >{option}
    </option>
    <!-- <div class="flex">
        <input type="radio" name = {name + type} id={name} {value} checked = {preset == value} class = "hidden"/>
        <label for={value}>{option}</label>
    </div> -->
{/each}
</select>
<br>
