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
     export let type = "S";
</script>

<label for={name}>{label}</label>
<input type="text" name = {name + type} id = {name}
        class="input rounded-[1em] bg-[#fefefe] border-transparent"
/>
<br/>