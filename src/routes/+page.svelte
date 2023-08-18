<script>
	import Dropdown from "./Dropdown.svelte";
    import ShortText from "./ShortText.svelte";
    import Tally from "./Tally.svelte";

</script>

<ShortText label = {"Name"} name = {"name"}/>
<Dropdown label = {"Team"} selections = {{0 : "Egg", 1 : "Cheese"}} name = {"team"}/>
<Tally label = {"Match Number"} name = {"match"}/>

