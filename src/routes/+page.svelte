<script>
    import Tally from "./Tally.svelte";
    import ShortText from "./ShortText.svelte";
    import Dropdown from "./Dropdown.svelte";
	import TeamSelection from "./TeamSelection.svelte";
</script>


<ShortText label = {"Name"} name = {"name"}/>
<TeamSelection/>
<!-- <Dropdown label = {"Team"} selections = {{0 : "Egg", 1 : "Cheese"}} name = {"team"}/> -->
<Tally label = {"Match Number"} name = {"match"}/>

