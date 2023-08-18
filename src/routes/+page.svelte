<script>
    import Tally from "../components/Tally.svelte";
    import ShortText from "../components/ShortText.svelte";
    import Dropdown from "../components/Dropdown.svelte";
	import TeamSelection from "../components/TeamSelection.svelte";
	import Toggle from "../components/Toggle.svelte";
	import Radioboxs from "../components/Radioboxs.svelte";
</script>

<form action="">
    <ShortText label = "Name:" name = "name"/>
    <TeamSelection/>
    <Tally label = "Match Number" name = "match"/>
    <Dropdown label = "Food" name = "food" 
        selections = {{0 : "Egg", 
                    1 : "Cheese"}}/>
    <Toggle label = "Do you like egg?" name = "eggPrefrence"/>
    <Radioboxs label = "What food you want?" name = "foodtwo" 
        selections = {{0 : "Egg", 
                    1 : "Cheese", 
                    2 : "Popcorn"}}/>

    <button type="submit">Sumbit</button>
</form>