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

<label for={name}>{label}</label><br>
<input type="text" name = {name + type} id = {name}/>
<br/>