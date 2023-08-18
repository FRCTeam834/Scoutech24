<script>
    /**
	 * @type {String}
	 */
    export let label;
    /**
	 * @type {string}
	 */
     export let name;
</script>

<label for={name}>{label}</label><br>
<input type="text" {name} id = {name}/>
<br/>