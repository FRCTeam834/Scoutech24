<script>
    import Tally from "../components/Tally.svelte";
    import ShortText from "../components/ShortText.svelte";
    import Dropdown from "../components/Dropdown.svelte";
	import TeamSelection from "../components/TeamSelection.svelte";
	import Toggle from "../components/Toggle.svelte";
	import Radioboxs from "../components/Radioboxs.svelte";
	import Tabel from "./Tabel.svelte";
	import Hamburger from "../components/Hamburger.svelte";

    export let data;
</script>

<Hamburger/>

<div id = "page">
<form method = "POST" action = "?/create">
    <ShortText label = "Name:" name = "name"/>
    <TeamSelection/>
    <Tally label = "Match Number" name = "match"/>
    <Dropdown label = "Food" name = "food" 
        selections = {{0 : "Egg", 
                    1 : "Cheese"}}/>
    <Toggle label = "Do you like egg?" name = "eggprefrence"/>
    <Radioboxs label = "What food you want?" name = "foodtwo" 
        selections = {{0 : "Egg", 
                    1 : "Cheese", 
                    2 : "Popcorn",
                    3 : "Joe",
                    4 : "crow",
                    }}
        selection = "2"/>

    <button class = "variant-filled-secondary h-35 btn btn-lg w-full" type="submit">Submit</button>
</form>
</div>
<ul>
    {#each data.post as entry}
        <li>
        <Tabel match = {entry[3]} team = {entry[2]} />
        </li>
    {/each}
</ul>