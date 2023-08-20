<script>
    import Tally from "../components/Tally.svelte";
    import ShortText from "../components/ShortText.svelte";
    import Dropdown from "../components/Dropdown.svelte";
	import TeamSelection from "../components/TeamSelection.svelte";
	import Toggle from "../components/Toggle.svelte";
	import Radioboxs from "../components/Radioboxs.svelte";
	import Tabel from "./Tabel.svelte";

    export let data;
</script>

<form method = "POST" action = "?/create">
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
                    2 : "Popcorn"}}
        preset = "0"/>

    <button type="submit">Sumbit</button>
</form>

<Tabel match = {8} team = {834} />