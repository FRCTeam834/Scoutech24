<script>
    import Tally from "../components/Tally.svelte";
    import ShortText from "../components/ShortText.svelte";
    import Dropdown from "../components/Dropdown.svelte";
	import TeamSelection from "../components/TeamSelection.svelte";
	import Toggle from "../components/Toggle.svelte";
	import Radioboxs from "../components/Radioboxs.svelte";
	import Tabel from "./Tabel.svelte";
	import Hamburger from "../components/Hamburger.svelte";
	import Header from "../components/Header.svelte";
	import AutonLocation from "../components/AutonLocation.svelte";

    // import { offlineData } from "../store";

    export let data;
</script>

<!-- <Hamburger/> -->

<div id = "page">
<form method = "POST" action = "?/create">
    <ShortText label = "Name:" name = "name"/> <br>
    <TeamSelection/> <br> <br>
    <Tally label = "Match Number" name = "match_number"/> <br>
    <Header title = "Auton Phase" color = "#f0d1d6"/> <br>
    <Radioboxs label = "Starting Position" name = "auton_position" 
    selections = {{
                0 : "Amp Side", 
                1 : "Middle", 
                2 : "Source Side",
                }}
    selection = "0"/> <br> 
    <Tally label = "Speaker Scores" name = "auton_speaker"/> <br>
    <Tally label = "Amp Scores" name = "auton_amp"/> <br>
    <Toggle label = "Holding Note at End?" name = "grab_piece"/> <br> <br>

    <Header title = "Teleop Phase" color = "#b8d2ff"/> <br>
    <Tally label = "Speaker Scores" name = "teleop_speaker"/> <br>
    <Tally label = "Amp Scores" name = "teleop_amp"/> <br>
    <Toggle label = "Were they Defended?" name = "defended"/> <br> <br>

    <Header title = "Misc. Info" color = "#defacf"/> <br>
    <Toggle label = "Did they play Defense?" name = "attack"/> <br> <br>
    <ShortText label = "Were They Good at Defense?" name = "good_defense"/> <br>
    <ShortText label = "Other" name = "other"/> <br>
    <Toggle label = "Did they break?" name = "broken"/> <br> <br>


    <button class = "variant-filled-secondary h-35 btn btn-lg w-full" type="submit">Submit</button> <br>
</form>
</div>



<!-- <ul>
    {#each data.post as entry}
        <li>
        <Tabel match = {entry[3]} team = {entry[2]} />
        </li>
    {/each}
</ul> -->